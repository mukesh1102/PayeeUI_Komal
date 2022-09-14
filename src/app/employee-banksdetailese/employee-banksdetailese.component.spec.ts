import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBanksdetaileseComponent } from './employee-banksdetailese.component';

describe('EmployeeBanksdetaileseComponent', () => {
  let component: EmployeeBanksdetaileseComponent;
  let fixture: ComponentFixture<EmployeeBanksdetaileseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBanksdetaileseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBanksdetaileseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
