import { Component, OnInit, OnDestroy } from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroImages: string[] = [
    'assets/timeline1.png',
    'assets/timeline.png',
    'https://via.placeholder.com/1200x500?text=Elevate+Your+Style'
  ];
  currentImageIndex: number = 0;
  private intervalId: any;

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Anarkali Suit',
      image: 'https://via.placeholder.com/250x250?text=Classic+Blazer',
      price: 120
    },
    {
      id: 2,
      name: 'Kanjeevaram Saree',
      image: 'https://via.placeholder.com/250x250?text=Green+Midi+Dress',
      price: 89
    },
    {
      id: 3,
      name: 'Pheran',
      image: 'https://via.placeholder.com/250x250?text=White+Sneakers',
      price: 75
    },
    {
      id: 4,
      name: 'Sarees',
      image: 'https://via.placeholder.com/250x250?text=Leather+Tote',
      price: 150
    }
  ];

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startSlideshow() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
    }, 5000); // Change image every 5 seconds
  }
}
