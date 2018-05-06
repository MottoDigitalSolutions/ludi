import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesSectionOneComponent } from './promociones-section-one.component';

describe('PromocionesSectionOneComponent', () => {
  let component: PromocionesSectionOneComponent;
  let fixture: ComponentFixture<PromocionesSectionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionesSectionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
