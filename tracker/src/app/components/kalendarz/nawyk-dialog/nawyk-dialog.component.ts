import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-nawyk-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  templateUrl: './nawyk-dialog.component.html',
  styleUrl: './nawyk-dialog.component.css'
})
export class NawykDialogComponent {

  habitTypes = ['Sen', 'Woda', 'Spacer'];
  habitType = '';
  habitDetails = '';

  constructor(
    public dialogRef: MatDialogRef<NawykDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave() {
    if (this.habitType && this.habitDetails.trim()) {
      this.dialogRef.close({ name: this.habitType, value: this.habitDetails });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
