import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from '../tasks.model';
import { v4 as uuid} from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  };

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TasksStatus.OPEN
    };
    
    this.tasks.push(task);
    return task;

  }
}
