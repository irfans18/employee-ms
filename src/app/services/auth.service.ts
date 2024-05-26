import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly router: Router,
  ) { }
  login(loginForm : {username: string, password: string}) {
    const { username, password } = loginForm;
      if (username === 'admin' && password === '123123') {
        Swal.fire('Login succeed!', '', 'success');
        this.router.navigate(['/employee']);
      } else {
        Swal.fire('Oops!', "Invalid Credential", 'warning');
      }
  }
}
