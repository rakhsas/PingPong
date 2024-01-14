import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit(): void {
    // Access any information in the route parameters or query parameters
    const accessToken = this.route.snapshot.queryParams['accessToken'];
    const firstLogin = this.route.snapshot.queryParams['firstLogin'];
    const providerAccessToken = this.route.snapshot.queryParams['provider'];
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('firstLogin', firstLogin);
      localStorage.setItem('providerAccessToken', providerAccessToken);
    }
    this.router.navigate(['/dashboard']);
    // Perform additional tasks based on the authentication result
    // this.fetchUserData();
  }
}
