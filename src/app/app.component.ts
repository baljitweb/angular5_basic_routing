import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

const defaultRouteSetting = {
  'defaultRoute' : 'fav'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works! and has been modified....';
  
  ngOnInit(){
    console.log(defaultRouteSetting);
  }

}
