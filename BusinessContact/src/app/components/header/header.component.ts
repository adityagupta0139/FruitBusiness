import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount = 0;

  @Output() menuSelected = new EventEmitter<'dashboard' | 'suit' | 'saree' | 'accessories' | 'aboutme'>();

  onMenuClick(event: MouseEvent, view: 'dashboard' | 'suit' | 'saree' | 'accessories' | 'aboutme') {
    event.preventDefault();
    this.menuSelected.emit(view);
  }
}
