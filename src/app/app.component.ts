import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaymentApp';
  constructor(private router: Router){}
  showLogoutButton = true;
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Check if the current route is the login or signup page
        if (event.url === '/login' || event.url === '/signup') {
          this.showLogoutButton = false;
        } else {
          this.showLogoutButton = true;
        }
      }
    });
  }


  logout(): void {
    // Clear the user session and navigate to the login page
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
