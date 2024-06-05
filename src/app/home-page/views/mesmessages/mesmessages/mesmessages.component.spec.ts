import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesmessagesComponent } from './mesmessages.component';

describe('MesmessagesComponent', () => {
  let component: MesmessagesComponent;
  let fixture: ComponentFixture<MesmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesmessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
