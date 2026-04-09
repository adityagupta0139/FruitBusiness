import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  subscribeEmail: string = '';
  
  onSubscribe() {
    if (this.subscribeEmail) {
      alert(`Subscribed with: ${this.subscribeEmail}`);
      this.subscribeEmail = '';
    }
  }
}
