import { Component, OnInit } from '@angular/core';
import { CatService } from './services/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cats: Array<any> = [];  // list of cats
  count: number;  // number of cards
  activeCard: number; // index of active card in Cats array
  showCats: boolean;  // show/hide cat images based on this flag
  containerWidth: string; // width of the container containing cards
  constructor(private catService: CatService) {
    this.count = 4; // show 4 cards initially
    this.showCats = false;  // hide cat images by default
  }

  ngOnInit() {
    this.getCats();
    this.calculateContainerWidth();
  }
  /* Fetch list of cats from api */
  getCats(): void {
    this.catService.getCats(this.count)
      .subscribe(data => {
        this.cats = data;
      }, error => {
        console.log('error occured while fetching cats.');
      });
  }
  /* calculate width of container to align cards horizontally. Gets fired on window resize. */
  calculateContainerWidth() {
    const maxCards = Math.floor((window.innerWidth - 80) / 210);  // Each card is 210px (150px width plus 30px margin)
    this.containerWidth = maxCards * 212 + 'px';  // max. number of cards * card width (adding 2px room)
  }
}
