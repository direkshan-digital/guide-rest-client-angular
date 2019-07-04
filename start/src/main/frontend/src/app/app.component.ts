import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistsService {
  constructor(private http: HttpClient) { } //DevSkim: ignore DS137138 

  private static ARTISTS_URL = '/artists';

  async fetchArtists() {
    try {
      const data: any = await this.http.get(ArtistsService.ARTISTS_URL).toPromise();
      return data;
    } catch (error) {
      console.error(`Error Occurred: ${error}`);
    }
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ArtistsService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  artists: any[] = [];
  constructor(private artistsService: ArtistsService) {}
  ngOnInit() {
    this.artistsService.fetchArtists().then(data => {
      this.artists = data;
    });
  }
}
