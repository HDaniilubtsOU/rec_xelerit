import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-typ-nawyk-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './typ-nawyk-dialog.component.html',
  styleUrl: './typ-nawyk-dialog.component.css'
})
export class TypNawykDialogComponent {

  newType = '';

  constructor(public dialogRef: MatDialogRef<TypNawykDialogComponent>) {}

  onSave() {
    if (this.newType.trim()) {
      this.dialogRef.close(this.newType.trim());
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
