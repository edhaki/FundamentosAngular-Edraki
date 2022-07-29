import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servicoex2',
  templateUrl: './servicoex2.component.html',
  styleUrls: ['./servicoex2.component.css']
})
export class Servicoex2Component  {

descri = "";

  constructor(public logger: LoggerService){

  }

  adicionarOsProdutos(){
    this.logger.logar(`o nome ${this.descri} foi adicionado`);
  }
}
