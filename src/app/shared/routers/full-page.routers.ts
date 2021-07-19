import { Routes, RouterModule } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export const Full_ROUTES: Routes = [
  
  {
    path: '',
    loadChildren: './pages/full-layout-pages/full-layout-pages.module#FullLayoutPagesModule'
  }
];