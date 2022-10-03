import { Component, OnInit } from '@angular/core';
import { Organisation } from 'src/app/model/organisation.model';
import { CommonService } from 'src/app/services/common.service';
import { ServercallsService } from 'src/app/services/servercalls.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  orgs: Array<Organisation> = [];
  selectedItem:string ="viewAllEvent";
  
  constructor(private services: ServercallsService,private commonservice:CommonService) {
    this.services.getOrganisations().subscribe(data => {
      this.orgs = data;
    });
   }


  ngOnInit() {
    
  }

  updateSearchResult($event){
    this.selectedItem = $event.target.value;
    console.log(this.selectedItem);
  }
  displayAddGroup(){
    return this.commonservice.getSearchSelected();
  }
}
