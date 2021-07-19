import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentLayoutPagesRoutingModule } from './content-layout-pages-routing.module';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PricingComponent } from './pricing/pricing.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { UsersComponent } from './users/users.component';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CompaniesComponent } from './companies/companies.component';
import { ApiListComponent } from './api-list/api-list.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MyAccountComponent } from './my-account/my-account.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    DashboardComponent,
    PricingComponent,
    Dashboard2Component,
    UsersComponent,
    CompaniesComponent,
    ApiListComponent,
    ApplicationsComponent,
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    ContentLayoutPagesRoutingModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentLayoutPagesModule { }
