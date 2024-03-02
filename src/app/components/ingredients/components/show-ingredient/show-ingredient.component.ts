import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './show-ingredient.component.html',
  styleUrl: './show-ingredient.component.scss',
})
export class ShowIngredientComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
