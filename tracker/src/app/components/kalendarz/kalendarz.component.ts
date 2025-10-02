import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { NawykDialogComponent } from './nawyk-dialog/nawyk-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NawykDialogService, NawykEntry } from './services/nawyk-dialog.service';
import { MatNativeDateModule } from '@angular/material/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';



@Component({
  selector: 'app-kalendarz',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './kalendarz.component.html',
  styleUrl: './kalendarz.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class KalendarzComponent {
  
  isBrowser: boolean;

  selectedDate: Date | null = new Date();
  habitTypes: string[] = [];

  constructor(private habitService: NawykDialogService, private cdr: ChangeDetectorRef, private dialog: MatDialog,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.habitTypes = this.habitService.getTypes();
  }

  get habitsForSelectedDate(): NawykEntry[] {
    return this.selectedDate ? this.habitService.getHabitsForDate(this.selectedDate) : [];
  }

  onDateChange(date: Date) {
    this.selectedDate = date;
    this.cdr.markForCheck();
  }

  openAddHabitDialog() {
    if (!this.selectedDate) return;

    const dialogRef = this.dialog.open(NawykDialogComponent, {
      width: '400px',
      data: { date: this.selectedDate }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.habitService.addHabit({
          date: this.selectedDate!,
          name: result.name,
          value: result.value
        });
        this.cdr.markForCheck();
      }
    });
  }


  onHabitToggle(event: any, habit: NawykEntry) {
    habit.completed = event.checked;
    this.cdr.markForCheck();
  }


  removeHabit(habit: NawykEntry) {
    this.habitService.removeHabit(habit);
    this.cdr.markForCheck();
  }

}
