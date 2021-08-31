import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsAddRecordComponent } from './patients-add-record.component';

describe('PatientsAddRecordComponent', () => {
  let component: PatientsAddRecordComponent;
  let fixture: ComponentFixture<PatientsAddRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsAddRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsAddRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
