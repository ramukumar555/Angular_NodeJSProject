import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  isSearchSelected: boolean = false;
  selectedSearchOrganisation: string = "viewAllEvent";

  setSearchSelected(searchSelected: boolean) {
    this.isSearchSelected = searchSelected;
  }

  getSearchSelected() {
    return this.isSearchSelected;
  }

  constructor() { }

  setSelectedSearchOrganisation(selectedItem: string) {
    this.selectedSearchOrganisation = selectedItem;
  }
  
  getSelectedSearchOrganisation() {
    return this.selectedSearchOrganisation;
  }
}
