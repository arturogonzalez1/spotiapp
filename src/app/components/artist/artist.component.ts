import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService ) {

    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    })
    this.loading = false;
  }
  getArtist(id: string) {
    this.spotify.getArtist(id)
      .subscribe((response: any) => {
        this.artist = response;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe((response: any) => {
        console.log(response);
        this.topTracks = response;
      })
  }

}
