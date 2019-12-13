import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssistantListComponent } from './assistant-list/assistant-list.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { IconsComponent } from './icons/icons.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import {AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[]

@NgModule({
  declarations: [
    AppComponent,
    AssistantListComponent,
    AdminLayoutComponent
 
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
    
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [], 
     bootstrap: [AppComponent]
})
export class AppModule { }
