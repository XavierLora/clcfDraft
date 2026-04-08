import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ClcfLayoutService } from '../../app/services/clcf-layout-service';

@Component({
  selector: 'clcf-home-page-component',
  imports: [
    NgOptimizedImage,
  ],
  standalone: true,
  templateUrl: './clcf-home-page-component.html',
})
export class ClcfHomePageComponent {}
