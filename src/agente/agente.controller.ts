import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Agente } from './agente.entity';
import { AgenteService } from './agente.service';

@Crud({
  model: {
    type: Agente,
  },
})
@Controller('agente')
export class AgenteController implements CrudController<Agente> {
  constructor(public service: AgenteService) {}
}
