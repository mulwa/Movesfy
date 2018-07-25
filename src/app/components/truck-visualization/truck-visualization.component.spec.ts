import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckVisualizationComponent } from './truck-visualization.component';

describe('TruckVisualizationComponent', () => {
  let component: TruckVisualizationComponent;
  let fixture: ComponentFixture<TruckVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
