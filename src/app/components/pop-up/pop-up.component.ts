import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  constructor(public dialogRef: MatDialogRef<any>){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
