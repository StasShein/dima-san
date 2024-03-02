import { Component } from '@angular/core';
import { ShowIngredientComponent } from './components/show-ingredient/show-ingredient.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { data } from './components/show-ingredient/data-ingredients.const';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [ ShowIngredientComponent],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {

  constructor(public dialog: MatDialog) {}

  public data = data

  openDialog(num: number) {
    this.dialog.open(ShowIngredientComponent, {
      data: {
        image: this.data[num].image,
        header: this.data[num].header,
        text: this.data[num].text
      },
    });
  }
}
