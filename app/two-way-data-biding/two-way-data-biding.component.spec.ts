import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBidingComponent } from './two-way-data-biding.component';

describe('TwoWayDataBidingComponent', () => {
  let component: TwoWayDataBidingComponent;
  let fixture: ComponentFixture<TwoWayDataBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataBidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
