import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTesterComponent } from './type-tester.component';

describe('TypeTesterComponent', () => {
  let component: TypeTesterComponent;
  let fixture: ComponentFixture<TypeTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
