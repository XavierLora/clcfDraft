import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcfNavigationComponent } from './clcf-nav-component';

describe('ClcfHomePageComponent', () => {
  let component: ClcfNavigationComponent;
  let fixture: ComponentFixture<ClcfNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
