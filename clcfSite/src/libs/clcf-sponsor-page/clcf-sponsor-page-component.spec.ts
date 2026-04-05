import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcfSponsorPageComponent } from './clcf-sponsor-page-component';

describe('ClcfSponsorPageComponent', () => {
  let component: ClcfSponsorPageComponent;
  let fixture: ComponentFixture<ClcfSponsorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfSponsorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfSponsorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
