import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})
export class ArquivoComponent implements OnInit {

  constructor() {}

  //Dados para a chamada no arquivo HTML e também a nova criação de um componente
 dados = [
    {nome: 'Gustavo', ru: 1918836, curso: "Análise de sistemas", nasc: "11/03/1997"},
    {nome: 'Pedro', ru: 1234565, curso: "Engenharia Ambiental", nasc: "15/04/2000"},
    {nome: 'Maria', ru: 1915123, curso: "Direito", nasc: "20/10/1999"},
    {nome: 'Ana', ru: 1415888, curso: "Medicina", nasc: "19/12/1888"},
    {nome: 'Camila', ru: 1416889, curso: "Recursos Humanos", nasc: "18/12/1977"},
    {nome: 'João', ru: 2710199, curso: "Matemática L", nasc: "25/12/1888"}
  ];

  ngOnInit() {
 

}
}