import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NawykDialogService } from '../kalendarz/services/nawyk-dialog.service';
import { TypNawykDialogComponent } from './typ-nawyk-dialog/typ-nawyk-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  isOpen = true;
  habitTypes: string[] = [];
  newHabitName = '';

  constructor(private nawykService: NawykDialogService, private dialog: MatDialog) {
    this.habitTypes = this.nawykService.getTypes();
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  addHabitType() {
    this.nawykService.addType(this.newHabitName);
    this.habitTypes = this.nawykService.getTypes();
    this.newHabitName = '';
  }

  openAddTypeDialog() {
    const dialogRef = this.dialog.open(TypNawykDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.nawykService.addType(result);
        this.habitTypes = this.nawykService.getTypes();
      }
    });
  }


  removeHabitType(habit: string) {
    this.nawykService.removeType(habit);
    this.habitTypes = this.nawykService.getTypes();
  }



}
