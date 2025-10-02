import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypNawykDialogComponent } from './typ-nawyk-dialog.component';

describe('TypNawykDialogComponent', () => {
  let component: TypNawykDialogComponent;
  let fixture: ComponentFixture<TypNawykDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypNawykDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypNawykDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
