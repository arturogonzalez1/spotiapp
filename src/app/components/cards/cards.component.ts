import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {

  @Input() items: any[] = [];
  constructor(private router: Router) {}

  showArtist(artist: any[]) {
    this.router.navigate(['/artist', artist['id']])
  }

}
