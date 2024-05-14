import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Services/apiService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../Models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private apiService: ApiService, 
    private router: Router,
    private toastr: ToastrService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      let user: User = this.userForm.value;
      user.createdAt = new Date();
      this.apiService.addUser(user).subscribe(() => {
        this.router.navigate(['/users']);
        this.toastr.success("Dodano użytkownika", "Sukces", {
          timeOut: 3000,
        });
      });
    }
  }
}
