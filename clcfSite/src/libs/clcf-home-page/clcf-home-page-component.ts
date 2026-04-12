import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HOME_PAGE_LINKS } from '../../app/services/clcf-navigation-service/clcf-navigation-service';

@Component({
  selector: 'clcf-home-page-component',
  imports: [
    NgOptimizedImage,
    MatIconModule,
  ],
  standalone: true,
  templateUrl: './clcf-home-page-component.html',
})
export class ClcfHomePageComponent {
  private readonly router = inject(Router);
  readonly homePageLink = HOME_PAGE_LINKS;

  routeToPage(page: string) {
    this.router.navigate([page]);
  }
}
