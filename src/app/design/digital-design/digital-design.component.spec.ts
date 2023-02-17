import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DigitalDesignComponent } from './digital-design.component';

describe('DigitalDesignComponent', () => {
  let component: DigitalDesignComponent;
  let fixture: ComponentFixture<DigitalDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalDesignComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] //ignore angular material elements
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
