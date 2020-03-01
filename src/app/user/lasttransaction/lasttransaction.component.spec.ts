import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasttransactionComponent } from './lasttransaction.component';

describe('LasttransactionComponent', () => {
  let component: LasttransactionComponent;
  let fixture: ComponentFixture<LasttransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasttransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
