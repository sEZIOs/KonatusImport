import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from '../../../dataservice.service';
import { user } from 'src/app/_data/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  constructor(private fb: FormBuilder, private dataService: DataserviceService, private router: Router) {

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  saveData(registerForm1: NgForm) {
    this.dataService.userregistration(registerForm1.value.firstName, registerForm1.value.lastName, registerForm1.value.email, registerForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },
      );
  }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get firstName() { return this.registerForm.get('firstName'); }
  get lasrName() { return this.registerForm.get('lastName'); }
}
