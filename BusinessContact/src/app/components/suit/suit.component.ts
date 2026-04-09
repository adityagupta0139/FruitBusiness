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
      image: 'https://images.unsplash.com/photo-1520975919682-8ca4c3d7f1a4?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Punjabi / Patiala Suit',
      description: 'Features a shorter kameez paired with heavily pleated, voluminous Patiala trousers. It is often adorned with vibrant Phulkari embroidery.',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Churidar Suit',
      description: 'Characterized by tightly fitted trousers that gather at the ankles to form churis or bangles.',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Angrakha Suit',
      description: 'A traditional Rajasthani style featuring an overlapping kameez that ties at the side with strings or tassels.',
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Pheran',
      description: 'A loose, long tunic from Kashmir, traditionally made of wool or cotton to protect against cold weather.',
      image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5a4?auto=format&fit=crop&w=600&q=80'
    }
  ];
}
