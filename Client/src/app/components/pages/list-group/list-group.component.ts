import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/model/group.model';
import { CommonService } from 'src/app/services/common.service';
import { ServercallsService } from 'src/app/services/servercalls.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {


  groups: Array<Group> = [];
  constructor(private services: ServercallsService, private commonservice: CommonService) {
    const selectedValue = this.commonservice.getSelectedSearchOrganisation();
    let url = "/api/groups/byorganization/" + selectedValue;
    if("viewAllEvent" === selectedValue){
      url = "/api/groups";
    }
    this.services.getGroupsbyOrganisations(url).subscribe(data => {
      this.groups = data;
    });
  }

  ngOnInit() {
    const selectedValue = this.commonservice.getSelectedSearchOrganisation();
    let url = "/api/groups/byorganization/" + selectedValue;
    if("viewAllEvent" === selectedValue){
      url = "/api/groups";
    }
    this.services.getGroupsbyOrganisations(url).subscribe(data => {
      this.groups = data;
    });
  }
  update() {
    this.ngOnInit();
  }

}
