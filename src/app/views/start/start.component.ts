import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

  constructor(private _router: Router) {
  }

  goTo(url: string) {
    console.log('hallo')
    this._router.navigate([url]);
  }

}
