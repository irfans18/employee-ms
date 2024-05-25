import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(
    private readonly router: Router
  ) { }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === '123123') {
        Swal.fire('Good job!', 'You clicked the button!', 'success');
        this.router.navigate(['/employee']);
      } else {
        Swal.fire('Oops!', "Invalid Credential", 'warning');
      }
    } 
  }
}
