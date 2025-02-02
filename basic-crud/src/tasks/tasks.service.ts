import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // Para almacenar las tareas temporalmente

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.tasks.length + 1, //Asignamos un ID único
      title: createTaskDto.title,
      description: createTaskDto.description,
      completed: false, // Las tareas empiezan como "no completadas"
    };
    this.tasks.push(newTask); // Agregar la nueva tarea al array
    return newTask; // retornar la tarea creada
  }

  findAll(): Task[] {
    return this.tasks; //Retorna todas las tareas
  }

  findOne(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return null; // retorna null si la tarea no existe
    }

    //obtener la tarea
    const updateTask = { ...this.tasks[taskIndex], ...updateTaskDto };

    // Reemplazar la tarea en el array con los nuevos valores

    return updateTask; // retornar la tarea actualizada
  }

  remove(id: number): boolean {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) return false; // si la tarea no existe, devolvemos false
    this.tasks.splice(index, 1); // Eliminamos la tarea del array
    return true; // Retornamos true para indicar que se eliminó correctamente
  }
}
