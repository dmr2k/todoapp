import { Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//Array de tareas
  tasks = signal([
    'Instalar alngular cli',
    'crear  proyecto',
    'crear componentes',
    'crear servicio'
  ]);
//Agregamos un nuevo metodo para agregar tareas
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
//Elinar tareas
  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

}

