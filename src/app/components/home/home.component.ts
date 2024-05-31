import { Component, inject } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { CardComponent } from '../card/card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FooterComponent } from '../footer/footer.component';
import { HousingLocation } from '../../housinglocation';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HousingService } from '../../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  // templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SlideComponent,
    CardComponent,
    PaginationComponent,
    FooterComponent,
    RouterOutlet,
    NavBarComponent,
    SlideComponent,
    CardComponent,
    PaginationComponent,
    FooterComponent,
    CommonModule,
  ],
  template: `
  <section>
  <nav class="bg-white shadow-md">
  <div class="container mx-auto px-4 py-2 flex items-center justify-between">
    <div class="text-xl font-bold">
      truyện tranh vn
    </div>

    <form class="flex items-center space-x-2">
      <input 
        type="text" 
        placeholder="Search.." 
        #filter
        class="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button 
        type="button" 
        (click)="filterResults(filter.value)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
      >
        Search
      </button>
    </form>
  </div>
</nav>
    </section>
    <div class="slide-bar">
    <app-slide></app-slide>
    </div>
    <section class="results">
      <app-card
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-card>
    </section>
    <div class="pagination">
      <app-pagination></app-pagination>
    </div>
    <div class="footer">
      <app-footer></app-footer>
    </div>
  `,
})
export class HomeComponent {
  title = 'demo';
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}

