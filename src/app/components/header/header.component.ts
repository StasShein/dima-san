import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public scrollTo(el: string) {
    const element = document.querySelector(el);

    console.log(element!.getBoundingClientRect().top);

    window.scrollTo({
      top:
        el === '#ingredients'
          ? element!.getBoundingClientRect().top
          : element!.getBoundingClientRect().top - 150,
      behavior: 'smooth',
    });
  }
}
