import { Injectable } from '@nestjs/common';

import { BaseRepository } from './base.repository';

import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { CreateOficioDTO } from 'src/dto/oficio.dto';
import { IOficio } from 'src/schemas/oficio.schema';

@Injectable()
export class OficioRepository extends BaseRepository {
  constructor(
    @InjectModel('oficio') private readonly oficioModel: Model<IOficio>,
  ) {
    super();
  }

  async create(createOficioDTO: CreateOficioDTO): Promise<any> {
    const createdOficio = new this.oficioModel(createOficioDTO);
    return await createdOficio.save();
  }

  async getOficios(): Promise<any> {
    return await this.oficioModel.find();
  }

}
