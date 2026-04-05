import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcfParentsPageComponent } from './clcf-parents-page-component';

describe('ClcfParentsPageComponent', () => {
  let component: ClcfParentsPageComponent;
  let fixture: ComponentFixture<ClcfParentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfParentsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfParentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
