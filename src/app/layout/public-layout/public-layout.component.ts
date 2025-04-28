import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
    CommonModule,
    WebHeaderComponent,
    WebFooterComponent,
    RouterModule
  ],
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {
  hideHeaderFooter = false;

  constructor(private router: Router, private configService: ConfigService) { }

  ngOnInit() {
    this.checkHeaderFooterVisibility(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkHeaderFooterVisibility(event.url);
      }
    });
  }

  checkHeaderFooterVisibility(url: string) {
    this.hideHeaderFooter = this.configService.checkHeaderFooterVisibility.includes(url);
  }
}
