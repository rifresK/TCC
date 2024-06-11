import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarModelsPage } from './car-models.page';

describe('CarModelsPage', () => {
  let component: CarModelsPage;
  let fixture: ComponentFixture<CarModelsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
