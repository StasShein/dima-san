import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CdTimerModule } from 'angular-cd-timer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, CdTimerModule, HttpClientModule],
  providers: [HttpClient],

  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  public form!: FormGroup;
  public time!: any;
  public date: any = new Date().getTime();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.timer();
  }

  private createForm() {
    this.form = this.fb.group({
      fio: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }

  rejectNonNumeric(event: any): void {
    let allowedKeys = [
      'Backspace',
      'Tab',
      'End',
      'Home',
      '-',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];

    if (event.key && !event.key.match(/^\d+$/)) {
      if (allowedKeys.includes(event.key)) {
        return;
      } else {
        event.preventDefault();
      }
    }
  }

  public sendFormValue() {
    const body =
      'fio=' +
      encodeURIComponent(this.form.value.fio) +
      '&country=' +
      encodeURIComponent(this.form.value.country) +
      '&phone=' +
      encodeURIComponent(this.form.value.phone);

    const url = '/echo?webmasterID=8&token=dima-san';

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post(url, body, { headers })
      .subscribe((item) => this.openSnackBar());
  }

  private openSnackBar() {
    this._snackBar.open('Done', '', {
      duration: 5000,
    });
  }

  public timer() {
    this.time = 10800 - (this.date % 10800000) / 1000;
  }
}
