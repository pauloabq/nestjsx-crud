import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Agente } from './agente.entity';

@Injectable()
export class AgenteService extends TypeOrmCrudService<Agente> {
  constructor(@InjectRepository(Agente) repo) {
    super(repo);
  }
}
