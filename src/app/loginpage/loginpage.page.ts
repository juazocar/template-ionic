import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  
  myid: string = "";
  data = null;

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();

    this.activeroute.paramMap.subscribe(params => {
      if (navigation && navigation.extras && navigation.extras.state) {
         this.myid = JSON.stringify(navigation.extras.state);
      }else {
        this.myid = 'No se pudo obtener el estado como cadena';
      }
      console.log(this.myid);
  });
   }

  ngOnInit() {
   
    

  }

}
