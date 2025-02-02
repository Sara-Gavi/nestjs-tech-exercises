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

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
