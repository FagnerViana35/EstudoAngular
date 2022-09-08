import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindindComponent } from './data-bindind.component';

describe('DataBindindComponent', () => {
  let component: DataBindindComponent;
  let fixture: ComponentFixture<DataBindindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
