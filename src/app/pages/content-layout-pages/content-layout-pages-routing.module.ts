import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PricingComponent } from './pricing/pricing.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { ApiListComponent } from './api-list/api-list.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MyAccountComponent } from './my-account/my-account.component';



import { AuthGuard } from '../../_guards';

const routes: Routes = [

      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
      { path: 'dashboard2', component: Dashboard2Component, canActivate: [AuthGuard]  },
      { path: 'pricing', component: PricingComponent, canActivate: [AuthGuard]  },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard]  },
      { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard]  },
      // { path: 'company/:id', component: CompanyComponent, canActivate: [AuthGuard]  },
      { path: 'apis', component: ApiListComponent, canActivate: [AuthGuard]  },
      { path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard]  },
      { path: 'account', component: MyAccountComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentLayoutPagesRoutingModule { }
