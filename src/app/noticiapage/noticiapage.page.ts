import { Component, OnInit } from '@angular/core';
import { PersistenceserviceService } from '../persistenceservice.service';
 
@Component({
  selector: 'app-noticiapage',
  templateUrl: './noticiapage.page.html',
  styleUrls: ['./noticiapage.page.scss'],
})
export class NoticiapagePage implements OnInit {
  noticia = {
    titulo: "",
    contenido: ""
  }
  constructor(private persistenceService: PersistenceserviceService) { }

  ngOnInit() {
  }

  crearNoticia(){
    this.persistenceService.addNoticia(this.noticia.titulo, this.noticia.contenido);
  }
}
