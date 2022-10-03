import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  orgs: Array<Organisation> = [];
  
  constructor(private services: ServercallsService,private commonservice: CommonService,private modalService: NgbModal) {
    this.services.getOrganisations().subscribe(data => {
      this.orgs = data;
    });
  }


  ngOnInit() {
  }

  openAddGroup(content){
    this.modalService.open(content, { centered: true });
  }

  sendReqToServer(url,type,key){
    this.services.sendReqToServer(url,type,key);
  }

}
