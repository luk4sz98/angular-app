import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../Services/apiService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-detailed',
  templateUrl: './user-detailed.component.html',
  styleUrls: ['./user-detailed.component.css']
})
export class UserDetailedComponent implements OnInit {
  userId: number;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.userId = this.route.snapshot.params['id'];
    this.userForm = this.formBuilder.group({
      name: [''],
      city: [''],
      dateOfBirth: ['']
    });
  }

  ngOnInit(): void {
    this.apiService.getUserById(this.userId).subscribe(user => {
      this.userForm.patchValue({
        name: user.name,
        city: user.city,
        dateOfBirth: user.dateOfBirth
      });
    });
  }

  onSubmit(): void {
    this.apiService.updateUser(this.userId, this.userForm.value).subscribe(() => {
      this.router.navigate(['/users']);
      this.toastr.success("Zaaktualizowano użytkownika", "Sukces", {
        timeOut: 3000,
      });
    });
  }

  deleteUser(): void {
    this.apiService.deleteUser(this.userId).subscribe(() => {
      this.router.navigate(['/users']);
      this.toastr.success("Usunięto użyktownika", "Sukces", {
        timeOut: 3000,
      });
    });
  }
}
