import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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

  routeToPage(page: string) {
    this.router.navigate([page]);
  }
}
