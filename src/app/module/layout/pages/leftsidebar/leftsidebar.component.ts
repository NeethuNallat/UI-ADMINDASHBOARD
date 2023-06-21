import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
buttonClick(){
this.router.navigateByUrl('gallery');
}
EcommerceClick(){
  this.router.navigateByUrl('');
}

}
