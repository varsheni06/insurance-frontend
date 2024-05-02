import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrl: './payment-detail-form.component.css'
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService, private router:Router){

  }
  onSubmit(form:NgForm){
    
    if(this.service.formData.paymentDetailId==0){
      this.insertrecord(form)
      alert("Successfully Enrolled for the insurance");
      this.router.navigate(['dashboard']);
    
    }
    else{
      this.updaterecord(form)}  
    
  }
  insertrecord(form: NgForm){
    this.service.postpaymentdetail()
    .subscribe({
      next:res=>{
        this.service.list= res as PaymentDetail[]
        this.service.resetform(form)
        
      },
      error:err=>{console.log(err)}
    })

  }
  updaterecord(form:NgForm){
    this.service.putpaymentdetail()
    .subscribe({
      next:res=>{
        this.service.list= res as PaymentDetail[]
        this.service.resetform(form)
        
      },
      error:err=>{console.log(err)}
    })

  }
  navigate(){
    this.router.navigate(['dashboard']);

  }

}
