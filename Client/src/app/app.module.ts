import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AddGroupComponent } from './components/modals/add-group/add-group.component'; 
import { ListGroupComponent } from './components/pages/list-group/list-group.component';
import { GroupDetailsComponent } from './components/modals/group-details/group-details.component';
import { MembersListComponent } from './components/modals/members-list/members-list.component';
import { AddmemberComponent } from './components/modals/addmember/addmember.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    SearchComponent,
    AddGroupComponent,
    ListGroupComponent,
    GroupDetailsComponent,
    MembersListComponent,
    AddmemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
