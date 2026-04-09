import { Component } from '@angular/core';

interface Feature {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  features: Feature[] = [
    {
      title: 'Curated Collections',
      icon: '👗',
      description: 'Handpicked styles ranging from festive bridal wear to office-ready ethnic sets.'
    },
    {
      title: 'Quality First',
      icon: '🧵',
      description: 'Premium fabrics including Silk, Organza, Georgette, and Pure Cotton.'
    },
    {
      title: 'For Every Occasion',
      icon: '📅',
      description: 'A one-stop shop for weddings, festivals, and daily elegance.'
    }
  ];
}
