import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenteController } from './agente.controller';
import { Agente } from './agente.entity';
import { AgenteService } from './agente.service';

@Module({
  imports: [TypeOrmModule.forFeature([Agente])],
  controllers: [AgenteController],
  providers: [AgenteService],
})
export class AgenteModule {}
