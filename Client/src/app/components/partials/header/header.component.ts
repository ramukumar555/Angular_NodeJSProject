import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = "/assets/logo/newLogo.png"
  @Output() isSearchSelected : boolean= false;
  constructor() { }

  ngOnInit() {
  }

  onSearchClick():void{
    this.isSearchSelected = true;    
  }

}
