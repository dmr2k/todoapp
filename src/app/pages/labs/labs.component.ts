// Importamos el decorador Component de @angular/core para poder crear un componente
import { Component } from '@angular/core';
// Importamos CommonModule para tener acceso a las directivas comunes de Angular como ngIf y ngFor
import { CommonModule } from '@angular/common';

// Decorador Component que define un componente en Angular
@Component({
  // selector define el nombre del componente para ser usado en las plantillas
  selector: 'app-labs',
  // standalone indica que este componente puede ser usado de forma independiente
  standalone: true,
  // imports es un array de módulos que se importan en este componente
  imports: [CommonModule],
  // templateUrl es la ruta al archivo HTML que define la vista de este componente
  templateUrl: './labs.component.html',
  // styleUrl es la ruta al archivo CSS que define los estilos de este componente
  styleUrl: './labs.component.css'
})
// Definición de la clase del componente
export class LabsComponent {
  // Definición de las propiedades del componente
  welcome = 'hola!';
  task = [
    'Instalar alngular cli',
    'crear  proyecto',
    'crear componentes',
    'crear servicio'
  ];  
  name = 'Daniel Muñoz';
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
    // Imprime el evento en la consola
    console.log(event);
  }

  // Método que maneja el evento keydown
  keydownHandler(event: KeyboardEvent) {
    // Obtiene el elemento HTML que disparó el evento
    const input = event.target as HTMLInputElement;
    // Imprime el evento en la consola
    console.log(event);
  }
}
