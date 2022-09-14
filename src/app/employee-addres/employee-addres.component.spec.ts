import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddresComponent } from './employee-addres.component';

describe('EmployeeAddresComponent', () => {
  let component: EmployeeAddresComponent;
  let fixture: ComponentFixture<EmployeeAddresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
