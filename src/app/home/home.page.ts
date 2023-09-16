import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StorageService } from '../storageservice.service';
import { Preferences } from '@capacitor/preferences';
//import { Storage, LocalStorage} from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private _storage: Storage | null = null;

  user = {
    user_email: "",
    user_password: ""
  }

  constructor(
    private router: Router
    //private local:LocalStorage,private storage: Storage, private router: Router
    ) {
   // this.local = new Storage(LocalStorage);
    //this.local.set('didTutorial', 'true');
  }

   ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
  }


  

  login() {
    console.log("login");
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
   // console.log(navigationExtras);
    this.setData('usuario', this.user.user_email);

   
    console.log("get data: "+this.getData('usuario'));
    this.router.navigateByUrl('/iniciopagealgo', navigationExtras);
  }

 

  onChangeEmail(event:any,value:any){
    console.log("change email");
    this.user.user_email = value;
    console.log(event.detail.data)
    }

  onChangePassword(event:any,value:any){
    console.log("change password");
      this.user.user_password = value;
      console.log(event.detail.data)
      }

  setEmail(value:string) {
    console.log("Set email");
    this.user.user_email = value;
  }

  setPassword(value:string) {
    console.log("Set password");
    this.user.user_password = value;
  }

  setData(key:string, value:string) {
    // Store the value under "my-key"
    Preferences.set({ key: key, value: value });
}

async getData(key: string) {
  const { value } = await Preferences.get({ key: key });
  return value;
}
}
