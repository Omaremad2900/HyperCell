import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from './note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})

export class NoteComponent {
  @Input() note!: Note;
  @Output() delete = new EventEmitter<number>();
  @Output() changeColor = new EventEmitter<{ noteId: number, color: string }>();

  deleteNote() {
    this.delete.emit(this.note.id);
  }

  changeBackgroundColor(color: string) {
    this.changeColor.emit({ noteId: this.note.id, color });
  }
  colors: string[] = [
    '#FFDDC1', // Light pink
    '#FFABAB', // Light red
    '#FFC3A0', // Light orange
    '#B9FBC0', // Light green
    '#A0C4FF', // Light blue
    '#C9ADA7', // Light brown
    '#FFE156', // Light yellow
    '#B9FBC0', // Light green
    '#E0A5A5', // Light coral
    '#D4A5A5'  // Light rose
  ];
}
