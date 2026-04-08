import { computed, inject, Injectable, OnDestroy, OnInit, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClcfLayoutService implements OnDestroy{
  private breakpointObserver = inject(BreakpointObserver);
  private subscription: Subscription;

  private readonly isMobileViewSignal = signal(false);
  readonly isDarkModeSignal = signal(true);

  readonly isMobileView = computed(() => {
    return this.isMobileViewSignal();
  });

  readonly isDarkMode = computed(() => {
    return this.isDarkModeSignal();
  });

  constructor(){
    this.subscription = this.breakpointObserver
    .observe([ Breakpoints.XSmall ])
    .subscribe((result) => {
      if (result.matches) {
        this.isMobileViewSignal.set(true);
      } else {
        this.isMobileViewSignal.set(false);
      }
    }); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
