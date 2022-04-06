import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsPageComponent } from './adverts-page.component';

describe('AdvertsPageComponent', () => {
  let component: AdvertsPageComponent;
  let fixture: ComponentFixture<AdvertsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
