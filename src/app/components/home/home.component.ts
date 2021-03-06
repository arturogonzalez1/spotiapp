import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newReleases: any = [];
  loading: boolean;
  constructor(private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe((response: any) => {
        this.newReleases = response;
        this.loading = false;
      });
  }

}
