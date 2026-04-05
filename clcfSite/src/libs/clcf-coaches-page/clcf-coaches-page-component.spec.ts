import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcfCoachesPageComponent } from './clcf-coaches-page-component';

describe('ClcfCoachesPageComponent', () => {
  let component: ClcfCoachesPageComponent;
  let fixture: ComponentFixture<ClcfCoachesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfCoachesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfCoachesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
