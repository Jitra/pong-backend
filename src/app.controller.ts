import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello() {
    return { success: true, message: 'Everything is fine' };
  }
  
  @Get('my-todo-list')
  getTodoList() {
    return [
      {"id": 1, text: "do the dishes"},
      {"id": 1, text: "pay the rent"},
    ];
  }
}
