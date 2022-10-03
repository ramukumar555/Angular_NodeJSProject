import { Component, OnInit, ViewChild } from '@angular/core';
import { Organisation } from 'src/app/model/organisation.model';
import { CommonService } from 'src/app/services/common.service';
import { ServercallsService } from 'src/app/services/servercalls.service';
import { ListGroupComponent } from '../list-group/list-group.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  orgs: Array<Organisation> = [];
  selectedItem:string ="viewAllEvent";
  @ViewChild(ListGroupComponent, { static: false }) listGroup: ListGroupComponent;
  
  constructor(private services: ServercallsService,private commonservice:CommonService) {
    this.services.getOrganisations().subscribe(data => {
      this.orgs = data;
    });
   }


  ngOnInit() {
    
  }

  updateSearchResult($event){
    this.selectedItem = $event.target.value;
    this.commonservice.setSelectedSearchOrganisation(this.selectedItem);
    this.listGroup.update();
    console.log(this.selectedItem);
  }

  displayAddGroup(){
    return this.commonservice.getSearchSelected();
  }

  receiveMessage($event) {    
    this.commonservice.setSelectedSearchOrganisation("");
    this.listGroup.update();
  }
}
