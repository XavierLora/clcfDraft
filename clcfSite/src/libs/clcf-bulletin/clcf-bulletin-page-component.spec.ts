import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcfBulletinPageComponent } from './clcf-bulletin-page-component';

describe('ClcfBulletinPageComponent', () => {
  let component: ClcfBulletinPageComponent;
  let fixture: ComponentFixture<ClcfBulletinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfBulletinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfBulletinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
