import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  url:string=environment.apiBaseUrl+'/PaymentDetail'
  list:PaymentDetail[]=[];
  formData: PaymentDetail = new PaymentDetail()

  constructor(private http:HttpClient) { }
  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next:res=>{
        this.list =res as PaymentDetail[]
      },
      error:err=>{console.log(err)}
    })
  }
  postpaymentdetail()
  {
    return this.http.post(this.url,this.formData)
  }
  putpaymentdetail()
  {
    return this.http.put(this.url+'/'+this.formData.paymentDetailId,this.formData)
  }
  deletepaymentdetail(id:number)
  {
    return this.http.delete(this.url+'/'+ id)
  }
  resetform(form:NgForm){
    form.form.reset()
    this.formData= new PaymentDetail()
  }
}
