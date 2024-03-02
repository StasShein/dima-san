import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SliderOptions, WtsSliderModule } from 'wts-slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [WtsSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (document.body.clientWidth < 900) {
      this.options.height = 780;
      this.options.navigation = false;
    } else {
      this.options.height = 480;
      this.options.navigation = true;
    }
  }

  ngAfterViewInit(): void {
    this.cdr.markForCheck();
  }

  options: SliderOptions = {
    slidesPerview: 1,
    loop: true,
    breakpoint: {
      HandsetLandscape: { autoplay: true },
    },
  };
}
