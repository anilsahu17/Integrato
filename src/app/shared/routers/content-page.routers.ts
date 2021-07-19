import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer

export const CONTENT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './pages/content-layout-pages/content-layout-pages.module#ContentLayoutPagesModule'
      }
];