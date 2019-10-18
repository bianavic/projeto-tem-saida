import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { OficioRepository } from '../repositories/oficio.repository';
import { CreateOficioDTO } from '../dto/oficio.dto';

@Injectable()
export class OficioService extends BaseService {
  constructor(private readonly oficioRepository: OficioRepository) {
    super();
  }

  create(createOficioDTO: CreateOficioDTO): Promise<any> {
    return this.oficioRepository.create(createOficioDTO);
  }

  getOficios() {
    return this.oficioRepository.getOficios();
  }
}