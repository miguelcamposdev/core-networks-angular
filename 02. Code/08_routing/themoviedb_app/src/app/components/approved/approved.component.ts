import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css'],
})
export class ApprovedComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.createSession().subscribe((resp) => {
      localStorage.setItem(Constants.LOCAL_SESSION_ID, resp.session_id);
      this.accountService.getDetails().subscribe((resp) => {
        localStorage.setItem(Constants.ACCOUNT_USERNAME, resp.username);
        localStorage.setItem(Constants.ACCOUNT_ID, resp.id.toString());
        localStorage.setItem(
          Constants.ACCOUNT_AVATAR,
          resp.avatar.tmdb.avatar_path
        );
        this.router.navigate(['/home']);
      });
    });
  }
}
