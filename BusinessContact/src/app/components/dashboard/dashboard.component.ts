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
    'assets/timelines1.png',
    'assets/timelines2.png',
    'assets/timelines3.png'
  ];
  currentImageIndex: number = 0;
  private intervalId: any;

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Anarkali Suit',
      image: 'assets/anarkali.png',
      price: 120
    },
    {
      id: 2,
      name: 'Kanjeevaram Saree',
      image: 'assets/kanjivaram.png',
      price: 89
    },
    {
      id: 3,
      name: 'Pheran',
      image: 'assets/pheran.png',
      price: 75
    },
    {
      id: 4,
      name: 'Kasavu Sarees',
      image: 'assets/kasavu.png',
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
