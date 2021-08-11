import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from '../tasks.model';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDTO } from '../dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.service.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.service.createTask(createTaskDTO);
  }
}
