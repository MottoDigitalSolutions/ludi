import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesBannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: PromocionesBannerComponent;
  let fixture: ComponentFixture<PromocionesBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionesBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
