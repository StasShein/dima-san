import { OrderComponent } from './components/order/order.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TabletsInfoComponent } from './components/tablets-info/tablets-info.component';
import { ManWomanComponent } from './components/man-woman/man-woman.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { GuaranteesComponent } from './components/guarantees/guarantees.component';
import { DoctorFeedbackComponent } from './components/doctor-feedback/doctor-feedback.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProcessComponent } from './components/process/process.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainViewComponent,
    StatisticComponent,
    TabletsInfoComponent,
    ManWomanComponent,
    IngredientsComponent,
    GuaranteesComponent,
    DoctorFeedbackComponent,
    SliderComponent,
    OrderComponent,
    ProcessComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dima-san';
}
