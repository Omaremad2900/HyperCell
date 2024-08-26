import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { Note } from './note/note';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CommonModule,NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HyperCell';
  appBackgroundClass: string = 'bg-light';  // Default background class

  notes: Note[] = [
    
    // Add more notes as needed
  ];

  // Method to add a new note
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

  onBackgroundChange(newClass: string) {
    this.appBackgroundClass = newClass;
  }

  deleteNote(noteId: number) {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }

  changeBackgroundColor(noteId: number, color: string) {
    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      note.backgroundColor = color;
    }
  }
  onClear(){
    this.notes=[];
  }
}
