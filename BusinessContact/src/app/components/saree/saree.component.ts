import { Component } from '@angular/core';

interface SareeItem {
  title: string;
  region: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrls: ['./saree.component.css']
})
export class SareeComponent {
  sarees: SareeItem[] = [
    {
      title: 'Banarasi Silk',
      region: 'Uttar Pradesh',
      description: 'Woven with gold and silver zari, these heavy silk sarees feature intricate floral and Mughal-inspired motifs. They are a quintessential choice for North Indian brides.',
      image: 'assets/banarasi.png'
    },
    {
      title: 'Kanjeevaram',
      region: 'Tamil Nadu',
      description: 'Often called the “Queen of Sarees,” they are made from pure mulberry silk with bold, contrasting borders and temple-inspired designs.',
      image: 'assets/kanjivaram.png'
    },
    {
      title: 'Paithani',
      region: 'Maharashtra',
      description: 'Distinguished by their luxurious silk and handwoven borders featuring peacock and lotus motifs.',
      image: 'assets/paithani.png'
    },
    {
      title: 'Kasavu',
      region: 'Kerala',
      description: 'A minimalist classic featuring a pristine off-white cotton base with a striking golden border, traditionally worn during festivals like Onam.',
      image: 'assets/kasavu.png'
    },
    {
      title: 'Bandhani & Leheriya',
      region: 'Gujarat & Rajasthan',
      description: 'Created using ancient tie-dye techniques. Bandhani features tiny dots, while Leheriya is known for its wave-like diagonal patterns.',
      image: 'assets/lehariya.png'
    }
  ];
}
