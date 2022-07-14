import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Hello } from './interfaces/hello';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppService', 'getHello')
  getHello(): Hello {
    return { message: this.appService.getHello() };
  }
}
