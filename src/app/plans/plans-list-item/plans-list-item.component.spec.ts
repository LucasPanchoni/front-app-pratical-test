import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansListItemComponent } from './plans-list-item.component';

describe('PlansListItemComponent', () => {
  let component: PlansListItemComponent;
  let fixture: ComponentFixture<PlansListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
