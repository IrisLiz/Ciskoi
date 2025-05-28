import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NzIconModule],
  template: `
    <router-outlet></router-outlet>
    <div class="theme-toggle" (click)="toggleTheme()">
      <i nz-icon [nzType]="isDarkTheme ? 'sun' : 'moon'" nzTheme="fill"></i>
    </div>
  `
})
export class AppComponent {
  isDarkTheme = false;

  constructor() {
    // Recuperar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkTheme();
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.enableDarkTheme();
    } else {
      this.enableLightTheme();
    }
  }

  private enableDarkTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    this.isDarkTheme = true;
  }

  private enableLightTheme() {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    this.isDarkTheme = false;
  }
}