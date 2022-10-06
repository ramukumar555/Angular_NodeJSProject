import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Group } from 'src/app/model/group.model';
import { Organisation } from 'src/app/model/organisation.model';
import { CommonService } from 'src/app/services/common.service';
import { ServercallsService } from 'src/app/services/servercalls.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  host:String = "http://localhost:8080";
  orgs: Array<Organisation> = [];
  groups: Array<Group> = [];
  constructor(private services: ServercallsService, private commonservice: CommonService,private modalService: NgbModal) {
    this.services.getOrganisations().subscribe(data2 => {
      this.orgs = data2;
    });
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
  editGroupModalReference: NgbModalRef;
  deleteGroupListModalReference: NgbModalRef;

  addMemberModalReference: NgbModalRef;
  membersListModalReference: NgbModalRef;

  openGroupDetails(content) {
    this.groupDetailsModalReference = this.modalService.open(content, { centered: true });
  }

  openEditGroup(content){
    this.editGroupModalReference = this.modalService.open(content, { centered: true });
  }

  openDeleteGroup(deleteGroup){
    this.deleteGroupListModalReference = this.modalService.open(deleteGroup, { centered: true });
  }

  openAddMember(content) {
    this.addMemberModalReference = this.modalService.open(content, { centered: true });
  }
  openMemberList(content) {
    this.membersListModalReference = this.modalService.open(content, { centered: true });
  }
  EditGroup = new FormGroup({
    ClassId: new FormControl(),
    ClassName: new FormControl(),
    AcademyName: new FormControl(),
    TeacherName: new FormControl(),
    TeacherPhone: new FormControl(),
    TeacherEmail: new FormControl(),
    ClassSize: new FormControl(),
    Image: new FormControl(),
    Description: new FormControl()
  });

  
  ClassLabel = [
    "ClassId",
    "ClassName",
    "AcademyName",
    "TeacherName",
    "TeacherPhone",
    "TeacherEmail",
    "ClassSize",
    "Image",
    "Description"
  ];


  sendReqToServer(url, modalId,group) {
    let apiUrl = "";
    let type = "PUT";
    let data = null;
    let formGroupRef = null;
    if("editGroup" === modalId){
      apiUrl = url+group.ClassId;
      data = this.EditGroup.value;
      this.EditGroup.reset();
      formGroupRef = this.editGroupModalReference;
    }
    this.services.sendReqToServer(apiUrl, type, data);
    formGroupRef.close();   
    this.groupDetailsModalReference.close();
    this.commonservice.setSelectedSearchOrganisation("");
    this.update();
  }
}
