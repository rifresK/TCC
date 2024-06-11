import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreparadoraPage } from './preparadora.page';

describe('PreparadoraPage', () => {
  let component: PreparadoraPage;
  let fixture: ComponentFixture<PreparadoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreparadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
