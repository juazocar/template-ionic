import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Noticia } from './entidades/Noticia';

@Injectable({
  providedIn: 'root'
})
export class PersistenceserviceService {

 

  constructor(private sqlite: SQLite, private platform: Platform) { 
     this.crearBD();
  }

  
  public async crearBD(){
    await this.platform.ready();
    try{
   

      this.sqlite.create({
        name:'data.db',
        location: 'default'
    }).then((db) => {
        console.log('Database created');
    }).catch(e => console.log('ERROR: ', e));
  }catch(e){
    console.error(`Error al crear la BD ${e}`);
    console.log(this.sqlite);
  }
    
  }


  public async crearTablas() {
    await this.platform.ready();
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db) => {
        db.executeSql("CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRYMARY KEY autoincrement, " +
        " titulo VARCHAR(50) NOT NULL, texto TEXT NOT NULL);", [])
          .then(() => console.log('Table Created!'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

 public async addNoticia(titulo: string, texto: string){
  await this.platform.ready();
    let data = [titulo, texto];
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db) => {
        db.executeSql('INSERT INTO noticia(titulo, texto) VALUES (?, ?)', data)
          .then(() => console.log('Noticia Inserted!'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
    
  /*
  updateNoticia(id: number, titulo: string, texto: string){
    let data = [titulo, texto, id];
    return this.database.executeSql('UPDATE noticia SET titulo = ?, texto = ? WHERE id = ? ', data)
    .then(()=>{
      this.cargarNoticias();
    })
  }

  deleteNoticia(id: number){
    return this.database.executeSql("DELETE FROM noticia WHERE id = ?", [id])
    .then(()=>{
      this.cargarNoticias();
    })
  }
 

  cargarNoticias() {
    return this.database.executeSql('SELECT * FROM  noticia', [])
    .then(([res]) =>{
          let items: Noticia[]=[];
          if(res.rows.length>0){
            for(var i=0 ;i< res.rows.length;i++ ){
              items.push({
                id:res.rows.items(i).id,
                titulo:res.rows.item(i).titulo,
                texto:res.rows.item(i).texto
              });
          }
     }
     this.listaNoticias.next(items);

    }); 
  }
 
  presentToast(arg0: string) {
    console.log(arg0);
 }  */

}
