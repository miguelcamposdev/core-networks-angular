import { Component } from '@angular/core';
import { LoginDataDto } from 'src/app/models/login-data.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginData = new LoginDataDto('', '');

  doLogin() {
    console.log(this.loginData);
  }

  isValid(): boolean {
    let valid = true;
    if (this.loginData.email == '' || this.loginData.password == '') {
      valid = false;
    }
    return valid;
  }
}
