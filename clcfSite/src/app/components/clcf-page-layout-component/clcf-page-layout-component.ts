import { Component, computed, inject } from '@angular/core';
import { ClcfNavigationComponent } from '../clcf-nav-component/clcf-nav-component';
import { RouterOutlet } from '@angular/router';
import { ClcfLayoutService } from '../../services/clcf-layout-service';

@Component({
  selector: 'clcf-page-layout-component',
  imports: [
    ClcfNavigationComponent,
    RouterOutlet,
  ],
  standalone: true,
  templateUrl: './clcf-page-layout-component.html',
})
export class ClcfPageLayoutComponent {
  private readonly layoutService = inject(ClcfLayoutService);

  isDarkMode = computed(() => {
    return this.layoutService.isDarkMode();
  });

}
