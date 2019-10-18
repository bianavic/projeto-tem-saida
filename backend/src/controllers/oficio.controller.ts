import { Controller, Post, Body, Get } from '@nestjs/common';
import { OficioService } from '../services/oficio.service';
import { BaseController } from './base.controller';
import { CreateOficioDTO } from '../dto/oficio.dto';

@Controller('oficios')
export class OficioController extends BaseController {
  constructor(private readonly oficioService: OficioService) {
    super();
  }

  @Post()
  create(@Body() CreateOficioDTO: CreateOficioDTO): Promise<any> {
    return this.oficioService.create(CreateOficioDTO);
  }

  @Get('/oficios')
  getOficios() {
    return this.oficioService.getOficios();
  }
}
