import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  
  onBackgroundChange(newClass: string) {
    this.appBackgroundClass = newClass;
  }

  
  onClear(){
    this.notes=[];
  }
}
