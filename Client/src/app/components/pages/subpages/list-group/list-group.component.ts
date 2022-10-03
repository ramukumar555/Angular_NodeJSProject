import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private services: ServercallsService, private commonservice: CommonService,private modalService: NgbModal) {

  }

  ngOnInit() {
    const selectedValue = this.commonservice.getSelectedSearchOrganisation();
    let url = "/api/groups/byorganization/" + selectedValue;
    if("viewAllEvent" === selectedValue || "" === selectedValue){
      url = "/api/groups";
    }
    this.services.getGroupsbyOrganisations(url).subscribe(data => {
      this.groups = data;
    });
  }
  update() {
    this.ngOnInit();
  }

  groupDetailsModalReference: NgbModalRef;
  addMemberModalReference: NgbModalRef;
  membersListModalReference: NgbModalRef;
  openGroupDetails(content) {
    this.groupDetailsModalReference = this.modalService.open(content, { centered: true });
  }

  openAddMember(content) {
    this.addMemberModalReference = this.modalService.open(content, { centered: true });
  }
  openMemberList(content) {
    this.membersListModalReference = this.modalService.open(content, { centered: true });
  }
}
