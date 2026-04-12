import { computed, inject, Injectable, OnDestroy, OnInit, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

//TODO: Move this to a service

export interface NavLink {
  name: string;
  path: string;
};

export interface HomePageLink {
  path: string;
  label: string;
  description: string;
  imgUrl: string;
}

export const NAV_BAR_LINKS: NavLink[] = [
  { name: 'About', path: '/about', },
  { name: 'Parents', path: '/parents' },
  { name: 'Coaches', path: '/coaches' },
  { name: 'Support', path: '/sponsor' },
  { name: 'Bulletin', path: '/bulletin' },
];

export const HOME_PAGE_LINKS: HomePageLink[] = [
  { path: "/about", label: "About Us", description: "Learn more about our organization, FAQ's, fields, and more!", imgUrl: "assets/toss.jpg" },
  { path: "/coaches", label: "For Coaches", description: "Access coaching resources, training materials, and best practices to help your team succeed.", imgUrl: "assets/coachesPhoto.jpg" },
  { path: "/parents", label: "For Parents", description: "Find resources, schedules, and information to support your child’s baseball journey.", imgUrl: "assets/pitcher.jpg" },];

@Injectable({
  providedIn: 'root'
})
export class ClcfNavService {

}
