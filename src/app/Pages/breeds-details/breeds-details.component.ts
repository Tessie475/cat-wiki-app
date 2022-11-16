import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/api.service';
import { Breed } from '../../../app/breed';

@Component({
  selector: 'app-breeds-details',
  templateUrl: './breeds-details.component.html',
  styleUrls: ['./breeds-details.component.css'],
})
export class BreedsDetailsComponent implements OnInit {
  breeds!: Breed[];
  breedImg!: string;
  breedName!: string;

  constructor(private route: ActivatedRoute, private apiUrl: ApiService) {
    this.route.queryParams.subscribe((params) => {
      this.breedName = params['name'];
    });
  }

  ngOnInit(): void {
    this.apiUrl.getOneBreed(this.breedName).subscribe((response: Breed[]) => {
      this.breeds = response;
      this.apiUrl
        .getOneImage(this.breeds[0].reference_image_id)
        .subscribe((response: any) => {
          this.breedImg = response.url;
        });
    });
  }
}
