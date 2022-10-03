import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Organisation } from 'src/app/model/organisation.model';
import { CommonService } from 'src/app/services/common.service';
import { ServercallsService } from 'src/app/services/servercalls.service';
 

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  // Create Array for the Class Tables

  ClassLabel = [

    "ClassName",

    "AcademyName",

    "TeacherName",

    "TeacherPhone",

    "TeacherEmail",

    "ClassSize",

    "Image",

    "Description",

  ];
  addGroupModalReference: NgbModalRef;

  AddGroup = new FormGroup({
    ClassName: new FormControl(),
    AcademyName: new FormControl(),
    TeacherName: new FormControl(),
    TeacherPhone: new FormControl(),
    TeacherEmail: new FormControl(),
    ClassSize: new FormControl(),
    Image: new FormControl(),
    Description: new FormControl()
  });

  orgs: Array<Organisation> = [];
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private services: ServercallsService, private commonservice: CommonService, private modalService: NgbModal) {
    this.services.getOrganisations().subscribe(data2 => {
      this.orgs = data2;
    });
  }


  ngOnInit() {
  }

  openAddGroup(content) {
    this.addGroupModalReference = this.modalService.open(content, { centered: true });
  }

  sendReqToServer(url, type) {
    this.services.sendReqToServer(url, type, this.AddGroup.value);
    this.AddGroup.reset();
    this.messageEvent.emit("Update the Groups");
    this.addGroupModalReference.close();
  }

}
