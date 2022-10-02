import { Component, OnInit } from '@angular/core';
import { Organisation } from 'src/app/model/organisation.model';
import { ServercallsService } from 'src/app/services/servercalls.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  orgs: Array<Organisation> = [];
  
  constructor(private services: ServercallsService) {
    this.services.getOrganisations().subscribe(data => {
      this.orgs = data;
    });
   }


  ngOnInit() {
    console.log("Ramu"+this.orgs);
  }

}
