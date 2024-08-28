import { Component, Input, input } from '@angular/core';
import { Note } from '../note/note';
import { NoteComponent } from '../note/note.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NoteComponent, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input() notes: Note[] = [];

  deleteNote(noteId: number) {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }

  changeBackgroundColor(noteId: number, color: string) {
    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      note.backgroundColor = color;
    }
  }
  addNote() {
    const newNote: Note = {
      id: this.notes.length + 1,
      title: 'New Note',
      content: '',
      date: new Date().toLocaleString(),
      backgroundColor: '#ffffff', // Default white background
    };
    this.notes.push(newNote);
  }


}
