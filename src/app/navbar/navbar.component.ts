import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  backgroundClass: string = 'bg-light';  // Default background class
  searchQuery: string = '';

  // Method to change the background color
  changeBackground(color: string) {
    this.backgroundClass = color;
  }

  // Method to clear search input
  clearSearch() {
    this.searchQuery = '';
  }
}

