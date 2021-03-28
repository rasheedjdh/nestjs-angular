import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

 
@Controller('analytics')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(@Res() res: Response): any {
    this.appService.getAnalyticsData().then((data) =>{
      return res.status(HttpStatus.OK).json(data); 
    }).catch(()=>{
      return res.status(HttpStatus.NOT_FOUND).json({'message': 'Resource not found'}); 
    })
  }
}
