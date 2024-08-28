import { Component, TemplateRef } from '@angular/core';
import{FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss'
})
export class TdfComponent {
  onSubmit(ref:NgForm): void {
    console.log('You submitted value:',ref);
  }

}
