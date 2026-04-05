import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ClcfLayoutService } from '../../services/clcf-layout-service';
import { NAV_BAR_LINKS } from './clcf-nav.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'clcf-nav-component',
  imports: [NgOptimizedImage, CommonModule, MatIconModule],
  standalone: true,
  templateUrl: './clcf-nav-component.html',
})
export class ClcfNavigationComponent implements AfterViewInit {
  /* Dependencies */
  private platformId = inject<Object>(PLATFORM_ID); //This is needed to bypass Intersection Observer issues in local
  readonly layoutService = inject(ClcfLayoutService);
  private readonly router = inject(Router);

  currentUrl = signal(this.router.url);

  /* Component Declarations */
  navLinks = NAV_BAR_LINKS;
  navSentinel = viewChild.required<ElementRef>('navSentinel');
  isNavbarAtTop = signal(false);
  isMobileNavMenuOpen = signal(false);
  isDarkMode = computed(() => {
    return this.layoutService.isDarkMode();
  });


  ngAfterViewInit(): void {
    this.currentUrl.set(this.router.url);
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isNavbarAtTop.set(!entry.isIntersecting); // Set true when navbar is at the top
          });
        },
        {
          root: null, // Defaults to the viewport
          threshold: 0, // Trigger when the entire navbar is out of view
        }
      );

      observer.observe(this.navSentinel().nativeElement);
    }
  }

  toggleHamburger(){
    this.isMobileNavMenuOpen.set(!this.isMobileNavMenuOpen());
  }

  toggleDarkMode(){ 
    this.layoutService.isDarkModeSignal.set(!this.layoutService.isDarkModeSignal());
  }

  navigateTo(path: string){
    this.router.navigate([path]);
    this.currentUrl.set(path);
    this.isMobileNavMenuOpen.set(false);
  }
}
