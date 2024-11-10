import { Component } from '@angular/core';
import {SyncComponent} from "../sync/sync.component";
import {AsyncComponent} from "../async/async.component";

@Component({
  selector: 'app-combined',
  standalone: true,
  imports: [
    SyncComponent,
    AsyncComponent
  ],
  templateUrl: './combined.component.html',
  styleUrl: './combined.component.scss'
})
export class CombinedComponent {

}
