import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-componente-servicos',
  templateUrl: './componente-servicos.component.html',
  styleUrls: ['./componente-servicos.component.css']
})
export class ComponenteServicosComponent  {

  nome = "";
  
  constructor(private logger: LoggerService){

  }

  adicionarNome(){
    this.logger.logar(`o nome ${this.nome} foi adicionado`);
  }
}
