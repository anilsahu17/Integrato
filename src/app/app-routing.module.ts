import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { FullPageComponent } from "./layouts/full-page/full-page.component";
import { ContentPageComponent } from "./layouts/content-page/content-page.component";


import { Full_ROUTES } from "./shared/routers/full-page.routers";
import { CONTENT_ROUTES } from "./shared/routers/content-page.routers";

import { PageNotFoundComponent } from './pages/full-layout-pages/page-not-found/page-not-found.component';

import { AuthGuard } from './_guards';

const routes: Routes = [
      
  { path: '', component: FullPageComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentPageComponent, data: { title: 'content Views' },children: CONTENT_ROUTES, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } },

];   

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }), // ToastrModule added
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
