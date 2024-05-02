import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userProfile: any;
  insurances: any[] = [
    { name: 'HEALTH INSURANCE', description: 'Comprehensive coverage for medical expenses, including hospital stays, doctor visits, and prescription drugs. Provides financial protection against unexpected medical costs and ensures access to quality healthcare.', expiryDate: '29/6/2024' },
    { name: 'HOMEOWNERS INSURANCE', description: 'Provides coverage for your home and personal property against damage or loss caused by fire, theft, vandalism, and natural disasters. Additionally, it offers liability protection for injuries that occur on your property and covers additional living expenses if your home becomes uninhabitable.', expiryDate: '15/9/2024'},
    { name: 'LIFE INSURANCE', description: 'Offers financial protection to beneficiaries in the event of the policyholder death. It provides a lump-sum payment, known as the death benefit, to the designated beneficiaries, helping them cover expenses such as funeral costs, outstanding debts, and living expenses.', expiryDate: '07/11/2024' }

  ];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const userEmail = localStorage.getItem('currentUser');
      console.log('User email:', userEmail);
      if (userEmail) {
        this.userService.getUserProfile(userEmail).subscribe(
          (profile: any) => {
            this.userProfile = profile;
          },
          (error: any) => {
            console.error('Error fetching user profile:', error);
          }
        );
      }
    }
  }

  goToPayment(): void {
    this.router.navigate(['/payment']);
  }
  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  enroll(insurance: any): void {
    this.router.navigate(['/payment'], { state: { insuranceData: insurance } });
  }
}
