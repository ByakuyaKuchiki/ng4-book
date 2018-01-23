import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartementComponent } from './product-departement.component';

describe('ProductDepartementComponent', () => {
  let component: ProductDepartementComponent;
  let fixture: ComponentFixture<ProductDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
