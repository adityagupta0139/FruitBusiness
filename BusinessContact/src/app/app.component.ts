import { Component } from '@angular/core';

interface Fruit {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fresh Fruits Hub';
  
  fruits: Fruit[] = [
    {
      id: 1,
      name: 'Apples',
      image: 'https://images.unsplash.com/photo-1560806674-d90b472b72e3?w=400',
      price: 5.99,
      description: 'Fresh, crisp, and juicy apples from local orchards'
    },
    {
      id: 2,
      name: 'Bananas',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
      price: 3.99,
      description: 'Ripe and sweet bananas packed with potassium'
    },
    {
      id: 3,
      name: 'Strawberries',
      image: 'https://images.unsplash.com/photo-1393279236195-c90e5e7a9610?w=400',
      price: 7.99,
      description: 'Sweet and delicious strawberries, perfect for any occasion'
    },
    {
      id: 4,
      name: 'Oranges',
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400',
      price: 4.99,
      description: 'Citrus fruits loaded with vitamin C and natural fruit juice'
    },
    {
      id: 5,
      name: 'Mangoes',
      image: 'https://images.unsplash.com/photo-1553531088-c4c7f20cdfdb?w=400',
      price: 6.99,
      description: 'Exotic and creamy mangoes, the king of fruits'
    },
    {
      id: 6,
      name: 'Grapes',
      image: 'https://images.unsplash.com/photo-1591181520189-abcb0c41f86d?w=400',
      price: 5.49,
      description: 'Seedless grapes in red and green varieties'
    }
  ];
}
