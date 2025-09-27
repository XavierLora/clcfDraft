import { Component } from '@angular/core';
import { ClcfNavigationComponent } from '../clcf-nav-component/clcf-nav-component';
import { RouterOutlet } from '@angular/router';

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

}
