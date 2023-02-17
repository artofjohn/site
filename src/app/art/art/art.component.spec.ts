import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArtComponent } from './art.component';

describe('ArtComponent', () => {
  let component: ArtComponent;
  let fixture: ComponentFixture<ArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] //ignore angular material elements
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
