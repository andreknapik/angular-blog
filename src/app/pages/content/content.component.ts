import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"
  contentText: string | undefined;
  textoFormatado: any;

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find(article => article.id === id);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.contentText = result.text; // Certifique-se de que a propriedade "text" exista nos dados.
      this.photoCover = result.photoCover;

      if (result.text) {
        this.textoFormatado = result.text.replace(/\\n/g, '\n');
      } else {
        this.textoFormatado = ''; // Defina um valor padrão caso 'result.text' seja nulo ou indefinido.
      }
    } else {
      // Lide com o caso em que nenhum artigo com o 'id' fornecido é encontrado.
      // Você pode lançar um erro, definir valores padrão, ou fazer qualquer outra ação apropriada.
    }
  }
}
