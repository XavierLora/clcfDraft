import { Routes } from '@angular/router';
import { ClcfPageLayoutComponent } from './components/clcf-page-layout-component/clcf-page-layout-component';
import { ClcfHomePageComponent } from '../libs/clcf-home-page/clcf-home-page-component';

export const routes: Routes = [
    { 
        path: '', 
        component: ClcfPageLayoutComponent, 
        children: [
            { path: "home", component: ClcfHomePageComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ],
    },
];
