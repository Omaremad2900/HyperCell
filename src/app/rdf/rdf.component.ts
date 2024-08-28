import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rdf',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './rdf.component.html',
  styleUrl: './rdf.component.scss'
})
export class RdfComponent implements OnInit {
  form:FormGroup
  constructor(private FormBuilder:FormBuilder){
   
}
  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required]
  });
  }
onSubmit(){
  console.log('You submitted value:',this.form.value);
}
}
