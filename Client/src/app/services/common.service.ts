import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isSearchSelected: boolean = false;

  setSearchSelected(searchSelected: boolean) {
    this.isSearchSelected = searchSelected;
  }

  getSearchSelected(){
    return this.isSearchSelected;
  }

  constructor() { }
}
