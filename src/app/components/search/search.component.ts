import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  loading: boolean;
  constructor(private spotify: SpotifyService ) { }
  artists: any = [];
  search(data: string) {
    if (data != '') {
      this.loading = true;
      this.spotify.getArtists(data)
        .subscribe((response: any) => {
          this.artists = response;
          this.loading = false;
        });
    }
  }

}
