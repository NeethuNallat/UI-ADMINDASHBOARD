import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalessectionComponent } from './salessection.component';

describe('SalessectionComponent', () => {
  let component: SalessectionComponent;
  let fixture: ComponentFixture<SalessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalessectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
