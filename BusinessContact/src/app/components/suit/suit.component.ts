import { Component } from '@angular/core';

interface SuitItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-suit',
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.css']
})
export class SuitComponent {
  suits: SuitItem[] = [
    {
      title: 'Anarkali Suit',
      description: 'A regal, frock-style outfit that flares out from the waist. It is often floor-length and heavily embellished, making it a popular choice for weddings.',
      image: 'assets/anarkali.png'
    },
    {
      title: 'Punjabi / Patiala Suit',
      description: 'Features a shorter kameez paired with heavily pleated, voluminous Patiala trousers. It is often adorned with vibrant Phulkari embroidery.',
      image: 'assets/punjabi.png'
    },
    {
      title: 'Churidar Suit',
      description: 'Characterized by tightly fitted trousers that gather at the ankles to form churis or bangles.',
      image: 'assets/churidar.png'
    },
    {
      title: 'Angrakha Suit',
      description: 'A traditional Rajasthani style featuring an overlapping kameez that ties at the side with strings or tassels.',
      image: 'assets/angrakha.png'
    },
    {
      title: 'Pheran',
      description: 'A loose, long tunic from Kashmir, traditionally made of wool or cotton to protect against cold weather.',
      image: 'assets/pheran.png'
    }
  ];
}
