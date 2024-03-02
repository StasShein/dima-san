import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    // if(document.body.clientWidth > 900){
    //   setTimeout(()=>{
    //     this.openDialog()
    //   },20000)
    // }
  }

  public scrollTo(){
    const element = document.querySelector('#order')

    window.scrollTo({
      top: element!.getBoundingClientRect().top - 150,
      behavior: "smooth",
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent);
    dialogRef.afterClosed().subscribe((item) =>{
      const  element = document.querySelector('#order')

      window.scrollTo({
        top: element!.getBoundingClientRect().top - 150,
        behavior: "smooth"
      })
    })
  }
}
