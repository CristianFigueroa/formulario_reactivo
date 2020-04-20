import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formularios';
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[^@]*@[^@]*')]],
      edad: ['', Validators.required],
    });
  }

  onSubmit(parametro) {
    console.log(parametro);
  }
}
