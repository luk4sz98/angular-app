import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/apiService';
import { User } from '../../Models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() userId!: number;
  userForm: FormGroup;
  user!: User;

  constructor(
    private formBuilder: FormBuilder, 
    private apiService: ApiService, 
    private router: Router,
    private toastr: ToastrService) {
    this.userForm = this.formBuilder.group({
      name: [''],
      city: [''],
      dateOfBirth: ['']
    });
  }

  ngOnInit(): void {
    this.apiService.getUserById(this.userId).subscribe(user => {
      this.user = user;
      this.userForm.patchValue({
        name: this.user.name,
        city: this.user.city,
        dateOfBirth: this.user.dateOfBirth
      });
    });
  }

  onSubmit(): void {
    const updatedUser: User = {
      id: this.user.id,
      name: this.userForm.get('name')!.value,
      city: this.userForm.get('city')!.value,
      dateOfBirth: this.userForm.get('dateOfBirth')!.value,
      createdAt: this.user.createdAt
    };
    
    this.apiService.updateUser(updatedUser.id, updatedUser).subscribe(() => {
      this.router.navigate(['/users']);
      this.toastr.success("Zaaktualizowano użytkownika", "Info", {
        timeOut: 3000,
      });
    });
  }

  deleteUser(): void {
    if (confirm('Czy na pewno chcesz usunąć tego użytkownika?')) {
      this.apiService.deleteUser(this.userId).subscribe(() => {
        this.router.navigate(['/users']);
        this.toastr.warning("Usunięto użytkownika", "Info", {
          timeOut: 3000,
        });
      });
    }
  }
}
