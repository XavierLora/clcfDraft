import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClcfAboutPageComponent } from './clcf-about-page-component';


describe('ClcfAboutPageComponent', () => {
  let component: ClcfAboutPageComponent;
  let fixture: ComponentFixture<ClcfAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcfAboutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcfAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
