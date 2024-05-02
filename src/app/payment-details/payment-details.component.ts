import { Component,OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {
  constructor(public service:PaymentDetailService,private router:Router){

  }
  ngOnInit():void{
    this.service.refreshList();
  }
  populateform(selectedRecord:PaymentDetail){
    this.service.formData=Object.assign({},selectedRecord);

  }
  ondelete(id:number){
  if(confirm('are you sure you want to delete the record?'))
    this.service.deletepaymentdetail(id)
    .subscribe({
      next:res=>{
        this.service.list= res as PaymentDetail[]
      },
      error:err=>{console.log(err)}
    })


  }
  logout(): void {
    
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
