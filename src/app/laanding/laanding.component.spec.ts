import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaandingComponent } from './laanding.component';

describe('LaandingComponent', () => {
  let component: LaandingComponent;
  let fixture: ComponentFixture<LaandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
