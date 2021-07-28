import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 { color: green; }
  `]
})
export class AppComponent {
  title = 'my-dream-app';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
  	this.loadedFeature = feature;
  }

}
