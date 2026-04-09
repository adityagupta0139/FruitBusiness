import { Component } from '@angular/core';

interface AccessoryItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  accessories: AccessoryItem[] = [
    {
      title: 'Earrings',
      description: 'A must-have for every outfit. Options include bell-shaped jhumkas for a classic look, crescent-shaped chandbalis for grand festivities, and simple studs for daily office wear.',
      image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5a4?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Necklaces',
      description: 'Choose based on the neckline. Chokers pair beautifully with deep-neck blouses, while long Rani Haars or layered necklaces complement high-neck kurtas and simple sarees.',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hand Jewelry',
      description: 'Nothing beats a wrist full of colorful bangles or a broad, ornate kada. For weddings, the haath phool (hand harness) adds a regal touch.',
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Headpieces',
      description: 'Maang Tikkas are standard for festive hair partings, while Matha Pattis and Jhoomars provide a traditional, vintage vibe.',
      image: 'https://images.unsplash.com/photo-1520975919682-8ca4c3d7f1a4?auto=format&fit=crop&w=800&q=80'
    }
  ];
}
