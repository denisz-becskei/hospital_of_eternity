import { AuthService } from 'src/app/services/auth.service';
import { CATEGORIES } from './../../database/categories.database';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-and-nav',
  templateUrl: './top-and-nav.component.html',
  styleUrls: ['./top-and-nav.component.scss']
})
export class TopAndNavComponent {
  categories = CATEGORIES;
  user_text: string = "User";

  constructor(public authService: AuthService) { }

  user(): string {
    if(this.authService.authenticated() && this.authService.getCurrentUser() !== null) {
      return this.authService.getCurrentUser().displayName;
    } else {
      return this.user_text;
    }
  }

  async logout(): Promise<void> {
    await this.authService.logout();
  }

}
