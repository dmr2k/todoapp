// Importa los módulos necesarios para crear un componente
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Decorador Component que define un componente en Angular
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
// Definición de la clase del componente
export class LabsComponent {
  // Definición de las propiedades del componente
  welcome = 'hola!';
  task = signal([
    'Instalar alngular cli',
    'crear  proyecto',
    'crear componentes',
    'crear servicio'
  ]); 
  name = signal ('Daniel Muñoz');
  age = 27;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  // Objeto person que agrupa varias propiedades relacionadas
  person = {
    name: 'Daniel Muñoz',
    age: 27,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  // Método que maneja el evento click
  clickHamdler() {
    // Muestra una alerta con el mensaje 'hola'
    alert('hola');
  }

  // Método que maneja el evento change
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  // Método que maneja el evento keydown
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(event);
  }
}
