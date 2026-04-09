import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: 'dashboard' | 'suit' | 'saree' | 'aboutme' | 'accessories' = 'dashboard';

  onMenuSelected(view: 'dashboard' | 'suit' | 'saree' | 'aboutme' | 'accessories') {
    this.currentView = view;
  }
}
