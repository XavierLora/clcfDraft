import { Routes } from '@angular/router';
import { ClcfPageLayoutComponent } from './components/clcf-page-layout-component/clcf-page-layout-component';
import { ClcfHomePageComponent } from '../libs/clcf-home-page/clcf-home-page-component';
import { ClcfAboutPageComponent } from '../libs/clcf-about-page/clcf-about-page-component';
import { ClcfParentsPageComponent } from '../libs/clcf-parents-page/clcf-parents-page-component';
import { ClcfSponsorPageComponent } from '../libs/clcf-sponsor-page/clcf-sponsor-page-component';
import { ClcfBulletinPageComponent } from '../libs/clcf-bulletin/clcf-bulletin-page-component';
import { ClcfCoachesPageComponent } from '../libs/clcf-coaches-page/clcf-coaches-page-component';

export const routes: Routes = [
    { 
        path: '', 
        component: ClcfPageLayoutComponent, 
        children: [
            { path: "home", component: ClcfHomePageComponent },
            { path: "about", component: ClcfAboutPageComponent },
            { path: "parents", component: ClcfParentsPageComponent },
            { path: "coaches", component: ClcfCoachesPageComponent },
            { path: "sponsor", component: ClcfSponsorPageComponent },
            { path: "bulletin", component: ClcfBulletinPageComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ],
    },
];
