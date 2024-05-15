import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../Services/apiService';
import { User } from '../../Models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'city', 'dateOfBirth', 'createdAt'];
  dataSource!: MatTableDataSource<User>;
  selectedRowIndex: number = -1;
  oldestUser: User | undefined;
  youngestUser: User | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiService.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.findExtremeUsers(users);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  selectRow(index: number) {
    this.selectedRowIndex = index;
  }

  findExtremeUsers(users: User[]): void {
    if (users.length > 0) {
      this.oldestUser = users.reduce((oldest, current) => {
        return (new Date(current.dateOfBirth) < new Date(oldest.dateOfBirth)) ? current : oldest;
      });

      this.youngestUser = users.reduce((youngest, current) => {
        return (new Date(current.dateOfBirth) > new Date(youngest.dateOfBirth)) ? current : youngest;
      });
    }
  }
}
