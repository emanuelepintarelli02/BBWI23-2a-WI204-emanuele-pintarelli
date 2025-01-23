import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formGroup = this.formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {}

  login() {
    console.log(this.formGroup.value);
    this.loginService.login(
      this.formGroup.value.username!,
      this.formGroup.value.password!,
    ).subscribe({
      next: user => alert('Welcome ' + user.username),
      error: err => alert('Login failed!'),
    });
  }
}
