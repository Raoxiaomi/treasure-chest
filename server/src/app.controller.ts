import { Controller, Get, Req, Request, Res, Response } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): string {
    return this.appService.getHello();
  }
}