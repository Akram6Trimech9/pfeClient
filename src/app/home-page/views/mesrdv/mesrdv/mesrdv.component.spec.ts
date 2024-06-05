import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesrdvComponent } from './mesrdv.component';

describe('MesrdvComponent', () => {
  let component: MesrdvComponent;
  let fixture: ComponentFixture<MesrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesrdvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
