import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = "/assets/logo/newLogo.png";
  commonservice:CommonService = null;

  
  constructor(private common: CommonService) { 
    this.commonservice = common;
  }

  ngOnInit() {
  }

  onSearchClick(): void {
    this.commonservice.setSearchSelected(true);
  }

}
