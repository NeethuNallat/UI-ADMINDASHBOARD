import { Component,Renderer2, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'Dashboard';


  constructor (private renderer:Renderer2){}

@HostListener('window:resize', ['$event'])
onResize(event:Event){
this.checkScreenWidth();
}

checkScreenWidth(){
  const screenWidth =window.innerWidth;
  if(screenWidth <1024){
    this.renderer.addClass(document.body, 'active');
  }else{
    this.renderer.removeClass(document.body, 'active');
  }
}

ngOnInit (){
this.checkScreenWidth();
}
}
