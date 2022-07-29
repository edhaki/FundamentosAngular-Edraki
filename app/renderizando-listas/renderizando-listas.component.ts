import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [ { id: 1, nome: "Xiaomi", descricao: "um celular da china", esgotado: true},
{id: 2, nome: "Samsung", descricao: "Celular da Samsung koreana", esgotado: false},
{id: 3, nome: "Posilixo", descricao: "Celular Bananense", esgotado:false}
]

}
