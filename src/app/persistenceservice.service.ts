import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class PersistenceserviceService {

  /*tblNoticias: string = "CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRYMARY KEY autoincrement, " +
                        " titulo VARCHAR(50) NOT NULL, texto TEXT NOT NULL);";
  
                        constructor(public database: SQLiteObject) { }

  crearBD(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name:'noticias.db',
        location: 'default'
    }).then((db: SQLiteObject) => {
      this.database = db;
      this.presentToast("BD creada");
      this.crearTablas();
    }).catch(e => this.presentToast(e));
    }
  }

  async crearTablas() {
    try {
        await this.database.executeSql(this.tblNoticias, []);
        this.presentToast("Tabla creada");
        this.cargarNoticias();
        this.isDbReady.next(true);
    }catch(error){
      this.presentToast("Error en Crear Tabla: "+error);
    }
  }

  addNoticia(titulo, texto){
    let data = [titulo, texto];
    return this.database.executeSql('INSERT INTO noticia(titulo, texto) VALUES (?, ?)', data)
    .then(()=>{
      this.cargarNoticias();
    })
  }

  updateNoticia(id, titulo, texto){
    let data = [titulo, texto, id];
    return this.database.executeSql('UPDATE noticia SET titulo = ?, texto = ? WHERE id = ? ', data)
    .then(()=>{
      this.cargarNoticias();
    })
  }

  deleteNoticia(id){
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
*/
}
