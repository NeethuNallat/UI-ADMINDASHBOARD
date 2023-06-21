import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsectionComponent } from './graphsection.component';

describe('GraphsectionComponent', () => {
  let component: GraphsectionComponent;
  let fixture: ComponentFixture<GraphsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
