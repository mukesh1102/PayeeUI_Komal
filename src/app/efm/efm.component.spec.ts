import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfmComponent } from './efm.component';

describe('EfmComponent', () => {
  let component: EfmComponent;
  let fixture: ComponentFixture<EfmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
