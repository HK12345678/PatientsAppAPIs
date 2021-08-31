import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsUpdateRecordComponent } from './patients-update-record.component';

describe('PatientsUpdateRecordComponent', () => {
  let component: PatientsUpdateRecordComponent;
  let fixture: ComponentFixture<PatientsUpdateRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsUpdateRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsUpdateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
