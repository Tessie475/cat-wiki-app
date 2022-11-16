import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsDetailsComponent } from './breeds-details.component';

describe('BreedsDetailsComponent', () => {
  let component: BreedsDetailsComponent;
  let fixture: ComponentFixture<BreedsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
