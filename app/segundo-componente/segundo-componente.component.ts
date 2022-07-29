import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent{
nome = "João";
dataNascimento = "1995-01-01";
urlImagem ="/assets/Jon.jpg";

mostrarDataNascimento(){

  alert(`A data de Nascimento do Jon é: ${this.dataNascimento}`)

}
}