// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: false,
  
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit() {
    // Handle login submission
    console.log(this.loginForm.value);
  }
}