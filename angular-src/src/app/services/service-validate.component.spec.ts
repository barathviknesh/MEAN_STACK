import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceValidateComponent } from './service-validate.component';

describe('ServiceValidateComponent', () => {
  let component: ServiceValidateComponent;
  let fixture: ComponentFixture<ServiceValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
