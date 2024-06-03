import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

declare var google: any;

@Component({
    selector: 'app-login',
    standalone: true,
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html',
    imports: [RouterModule, CommonModule, NavBarComponent]
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  userAvatar: string = '';
  userName: string = '';
  userEmail: string = '';

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const loggedInUser = sessionStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        this.isLoggedIn = true;
        this.userAvatar = user.picture;
        this.userName = this.decodeUnicode(user.name);
        this.userEmail = user.email;
      }
    }

    this.loadGoogleScript().then(() => {
      if (typeof google === 'undefined') {
        // console.error("Google library is not loaded.");
        return;
      }

      google.accounts.id.initialize({
        client_id: '778737319005-r8iuhckkolfodh9g6t91srkd202mudph.apps.googleusercontent.com',
        callback: (response: any) => {
          this.handleGoogleLogin(response);
        }
      });

      this.renderGoogleButton();
    });
  }

  private loadGoogleScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof google !== 'undefined') {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Google script load error'));
      document.head.appendChild(script);
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  private decodeUnicode(input: string): string {
    return decodeURIComponent(escape(input));
  }

  private renderGoogleButton() {
    const googleBtnElement = document.getElementById("google-btn");
    if (googleBtnElement) {
      google.accounts.id.renderButton(googleBtnElement, {
        theme: 'filled_blue', 
        size: 'large',
        shape: 'rectangle',
        width: 350
      });
    } else {
      // console.error("Element with ID 'google-btn' does not exist.");
    }
  }

  handleGoogleLogin(response: any) {
    const user = this.decodeToken(response.credential);
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    }
    this.isLoggedIn = true;
    this.userAvatar = user.picture;
    this.userName = this.decodeUnicode(user.name);
    this.userEmail = user.email;
    this.cd.detectChanges();
    this.router.navigate(['home']);
  }

  logout() {
    this.isLoggedIn = false;
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem("loggedInUser");
    }
    this.cd.detectChanges();
    this.renderGoogleButton();
    this.router.navigate(['login']);
  }

  onImageError() {
    this.userAvatar = 'https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp';
  }
}
