import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../../../_data/user';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../../../dataservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  constructor(private fb: FormBuilder, private dataService: DataserviceService, private router: Router) {
    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]

    });
  }

  ngOnInit() {
  }
  saveData(loginForm1: NgForm) {
    this.dataService.userlogin(loginForm1.value.email, loginForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard'; //provide link to redirect after login here
          this.router.navigate([redirect]);
        },
      );
  }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
