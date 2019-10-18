import { Module } from '@nestjs/common';
import { OficioController } from '../controllers/oficio.controller';
import { OficioService } from '../services/oficio.service';
import { OficioRepository } from '../repositories/oficio.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { OficioSchema } from '../schemas/oficio.schema';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'oficio', schema: OficioSchema },
      ]),
    ],
  
    controllers: [OficioController],
    providers: [OficioService, OficioRepository],
    exports: [OficioService, OficioRepository],
  })
  export class OficioModule {}