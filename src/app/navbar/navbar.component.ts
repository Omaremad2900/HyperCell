import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  backgroundClass: string = 'bg-Dark';  // Default background class
  searchQuery: string = '';

  @Output() backgroundChange = new EventEmitter<string>();
  @Output() ClearChange = new EventEmitter();
  // Method to change the background color
  changeBackground(color: string) {
    this.backgroundChange.emit(color);  // Emit the color change event
  }

  // Method to clear search input
  clearSearch() {
   this.ClearChange.emit();
  }
}
