import { Component } from '@angular/core';
import { LoadService } from './load.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { datamodel } from './model';


// import customer from'./customer.json';

// interface Customer{
//   firstName: string;
//   lastName: string;
//   address: string;
//   city: string;
//   state: string;
//   orderTotal:string;
// }
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  // customers:Customer[] =customer;

  p:number=1
  pageSize:number =5//no of items to display per page

  searchText='';


  
  customerform!:FormGroup;
  datas:  any|datamodel[];


  constructor(private LoadService:LoadService,private formbuilder:FormBuilder) { }
  ngOnInit(){
  
    this.customerform=this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      orderTotal:['',Validators.required]
    });
   this.getData();
  }
  addcustomer(data:datamodel){
    // console.log(data);
    this.LoadService.addcustomer(data).subscribe((res=>{
      this.customerform.reset();
    }))
   this.getData();
  }
  getData(){
    this.LoadService.getData().subscribe(data =>{
      this.datas = data;
    });
  }

  delete(id:number){
    this.LoadService.deletecustomer(id).subscribe(()=>{
      console.log("delete")
    })
  }
}
