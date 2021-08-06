import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from '../tasks.model';
import { TasksService } from '../services/tasks.service';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.service.getAllTasks();
  }

  @Post()
  createTask(@Body('title') title, @Body('description') description): Task {
    return this.service.createTask(title, description);
  }
}
