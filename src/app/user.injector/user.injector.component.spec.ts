import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User.InjectorComponent } from './user.injector.component';

describe('User.InjectorComponent', () => {
  let component: User.InjectorComponent;
  let fixture: ComponentFixture<User.InjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User.InjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User.InjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
