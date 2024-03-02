import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrivacyComponent } from './politics/privacy/privacy.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PrivacyComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  public scrollTo() {
    window.scrollTo({
      top: 0,
    });
  }

  openDialog() {
    this.dialog.open(PrivacyComponent);
  }
}
