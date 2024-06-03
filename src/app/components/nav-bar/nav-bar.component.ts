import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  // templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  template: `
 <section>
      <nav class="bg-white shadow-md">
        <div
          class="container mx-auto px-4 py-2 flex items-center justify-between"
        >
          <div class="logo">
            <img
              src="https://play-lh.googleusercontent.com/FBhvLNtxHvTB2XZqEJVryI9R8uuYgvpWY4U9uw_A8ysDdml4YQ5Ndwq6sv2XMTtpLX8"
            />
          </div>

          <button
            style="margin-left: -260px; font-size:25px;"
            class="styled-heading"
          >
            <span>TRUYENTRANHVN</span>
          </button>

          <button
            class="styled-heading"
            style="margin-left: 50px; font-size:15px"
            [routerLink]="['/']"
          >
            <span>trang chu</span>
            
          </button>

          <button
            class="styled-heading"
            style="margin-left: -250px; font-size:15px"
          >
            <span>the loai</span>
          </button>

          <button
            class="styled-heading"
            style="margin-left: -250px; font-size:15px"
            [routerLink]="['/login']"
          >
            <span>Profile</span>
          </button>

          <form class="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search.."
              #filter
              class="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
            >
              Search
            </button>
          </form>

          <!-- <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
            style="margin-left:-250px;"
            
          >
            login
          </button> -->
        </div>
      </nav>
    </section>
  `
})
export class NavBarComponent {

}
