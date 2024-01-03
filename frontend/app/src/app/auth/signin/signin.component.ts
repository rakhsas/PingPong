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
  signWithGoogle() {
    this.authService.signWithGoogle();
  }
  signWithGithub() {
    this.authService.signWithGithub();
  }
}
