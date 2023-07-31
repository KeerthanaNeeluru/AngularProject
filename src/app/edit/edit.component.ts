import { Component } from '@angular/core';
import { datamodel } from '../customer/model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoadService } from '../customer/load.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  public dataid!:number;
  public customerdata!:datamodel;
  
  constructor(private route: ActivatedRoute, private router: Router,private api:LoadService) { }
 ngOnInit(): void {
  this.route.paramMap.subscribe((param:Params)=>{
    this.dataid=param['get']("id");
    // console.log(this.dataid);
    
  })
  this.api.fetchcustomer(this.dataid).subscribe((data:datamodel)=>{
    this.customerdata=data
    console.log(data);
  })
 }
 edit(){
  this.api.editcustomer(this.customerdata,this.dataid).subscribe((res:datamodel)=>{
    this.router.navigate(["/Customer"])
  })
}
}
