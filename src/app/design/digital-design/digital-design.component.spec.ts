import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDesignComponent } from './digital-design.component';

describe('DigitalDesignComponent', () => {
  let component: DigitalDesignComponent;
  let fixture: ComponentFixture<DigitalDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
