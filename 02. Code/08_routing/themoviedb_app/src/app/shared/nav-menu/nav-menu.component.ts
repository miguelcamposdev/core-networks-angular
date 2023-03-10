import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    this.authService.requestToken().subscribe((resp) => {
      localStorage.setItem(Constants.LOCAL_REQUEST_TOKEN, resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/approved`;
    });
  }

  getUsername() {
    return localStorage.getItem(Constants.ACCOUNT_USERNAME);
  }

  existSession(): boolean {
    return localStorage.getItem(Constants.LOCAL_SESSION_ID) != null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  goToProfile() {
    this.router.navigate(['/my-profile']);
  }

  getAvatar() {
    let img = localStorage.getItem(Constants.ACCOUNT_AVATAR);
    return `https://image.tmdb.org/t/p/w500${img}`;
  }
}
