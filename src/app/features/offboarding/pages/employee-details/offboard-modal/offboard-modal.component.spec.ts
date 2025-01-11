import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardModalComponent } from './offboard-modal.component';

describe('OffboardModalComponent', () => {
  let component: OffboardModalComponent;
  let fixture: ComponentFixture<OffboardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffboardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
