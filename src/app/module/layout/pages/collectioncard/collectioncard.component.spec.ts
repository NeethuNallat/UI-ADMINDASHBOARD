import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectioncardComponent } from './collectioncard.component';

describe('CollectioncardComponent', () => {
  let component: CollectioncardComponent;
  let fixture: ComponentFixture<CollectioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectioncardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
