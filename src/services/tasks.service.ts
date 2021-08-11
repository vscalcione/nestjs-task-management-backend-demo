import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from '../tasks.model';
import { v4 as uuid} from 'uuid';

import { CreateTaskDTO } from '../dtos/create-task.dto';


@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  };

  createTask(createTaskDTO: CreateTaskDTO): Task {
    const { title, description } = createTaskDTO;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TasksStatus.OPEN
    };
    
    this.tasks.push(task);
    console.log(task);
    return task;

  }
}
