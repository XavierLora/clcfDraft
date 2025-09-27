import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcfHomePageComponent } from './clcf-home-page-component';

describe('ClcfHomePageComponent', () => {
  let component: ClcfHomePageComponent;
  let fixture: ComponentFixture<ClcfHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
