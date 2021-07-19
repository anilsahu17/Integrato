import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';


import { ReactiveFormsModule } from '@angular/forms'


import { FullPageComponent } from './layouts/full-page/full-page.component';
import { ContentPageComponent } from './layouts/content-page/content-page.component';


import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


import { FullLayoutPagesComponent } from './pages/full-layout-pages/full-layout-pages.component';
import { ContentLayoutPagesComponent } from './pages/content-layout-pages/content-layout-pages.component';


import { PageNotFoundComponent } from './pages/full-layout-pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    
    FullPageComponent,
    ContentPageComponent,
    FullLayoutPagesComponent,
    ContentLayoutPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
