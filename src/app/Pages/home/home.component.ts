import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showDropdown: boolean = false;
  catImages!: any;
  breedName: string[] = [];
  catBreed = '';
  breeds!: any[];
  breedsList!: string[];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getCatImages().subscribe((response: any) => {
      this.catImages = response;
    });
    this.api.getAllBreeds().subscribe((response: any) => {
      this.breeds = response;
      for (let i = 0; i < this.breeds.length; i++) {
        this.breedName.push(this.breeds[i].name);
      }
    });
  }
  displayDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  search() {
    this.breedName = this.breedName.map((value) => value.toLowerCase());
    let breedNameLowerCase = this.catBreed.toLowerCase();
    if (
      breedNameLowerCase != '' &&
      this.breedName.includes(breedNameLowerCase)
    ) {
      this.router.navigate(['/breedsDetails'], {
        queryParams: { name: breedNameLowerCase },
      });
    }
  }
}
