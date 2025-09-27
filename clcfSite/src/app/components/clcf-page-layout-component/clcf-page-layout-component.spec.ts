import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcfPageLayoutComponent } from './clcf-page-layout-component';

describe('ClcfHomePageComponent', () => {
  let component: ClcfPageLayoutComponent;
  let fixture: ComponentFixture<ClcfPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
