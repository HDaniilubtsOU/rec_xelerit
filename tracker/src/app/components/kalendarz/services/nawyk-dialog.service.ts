import { Injectable } from '@angular/core';


export interface NawykEntry {
  date: Date;
  name: string;
  value: string;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NawykDialogService {

  private habitTypes: string[] = ['Sen', 'Woda', 'Spacer'];
  private habitEntries: NawykEntry[] = [];

  getTypes(): string[] {
    return [...this.habitTypes];
  }

  addType(name: string) {
    if (name.trim() && !this.habitTypes.includes(name.trim())) {
      this.habitTypes.push(name.trim());
    }
  }

  getHabitsForDate(date: Date): NawykEntry[] {
    return this.habitEntries.filter(h =>
      h.date.toDateString() === date.toDateString()
    );
  }

  addHabit(entry: NawykEntry) {
    this.habitEntries.push(entry);
  }

  getAllHabits(): NawykEntry[] {
    return [...this.habitEntries];
  }

  removeHabit(entry: NawykEntry) {
    const index = this.habitEntries.findIndex(h =>
      h.date.toDateString() === entry.date.toDateString() &&
      h.name === entry.name &&
      h.value === entry.value
    );

    if (index !== -1) {
      this.habitEntries.splice(index, 1);
    }
  }


  // dla usuwania w sidebar
  removeType(type: string) {
    const index = this.habitTypes.indexOf(type);
    if (index !== -1) {
      this.habitTypes.splice(index, 1);
    }
  }

}
