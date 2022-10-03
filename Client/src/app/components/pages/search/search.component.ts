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
  
  constructor(private services: ServercallsService,private commonservice:CommonService) {
    this.services.getOrganisations().subscribe(data => {
      this.orgs = data;
    });
   }


  ngOnInit() {
    
  }

  updateSearchResult($event){
    console.log($event.target.value);
  }
  displayAddGroup(){
    return this.commonservice.getSearchSelected();
  }
}
