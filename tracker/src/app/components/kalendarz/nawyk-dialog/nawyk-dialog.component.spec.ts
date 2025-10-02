import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NawykDialogComponent } from './nawyk-dialog.component';

describe('NawykDialogComponent', () => {
  let component: NawykDialogComponent;
  let fixture: ComponentFixture<NawykDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NawykDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NawykDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
