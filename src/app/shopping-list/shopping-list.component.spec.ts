import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';

xdescribe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});