import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  constructor(public dialogRef: MatDialogRef<any>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
