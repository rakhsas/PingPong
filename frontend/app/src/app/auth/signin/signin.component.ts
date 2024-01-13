import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(
    private authService: AuthService
  ) { }
  ngOnInit() {
    if (typeof window !== 'undefined') {
      console.log("ndjks");
      // Access window object here
      const queryParams = new URLSearchParams(window.location.search);
      const githubAuthResult = queryParams.get('githubAuthResult');

      if (githubAuthResult === 'success')
        console.log('github authentication successful');
      else if (githubAuthResult === 'failure')
        console.log('github authentication failed');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
  signWithGoogle() {
    this.authService.signWithGoogle();
  }
  signWithGithub() {
    this.authService.signWithGithub();
  }

}
