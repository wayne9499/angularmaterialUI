import { Component } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { RecordsService } from './records.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  records = [];

  constructor(private snackbar: MatSnackBar, public matdialog: MatDialog, private myFirstSerivice: RecordsService) {}
  ngOnInit(){
    this.records = this.myFirstSerivice.getData();
    console.log('records fetched from service-> ', this.records);
  }
  title = 'angularmaterial';
  size = 14;
  value = 0;
  opened = false;

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  openSnackbar(message, action) {
    this.snackbar.open(message, action, {duration: 2000});
  }

  openDialog() {
    let dialogRef = this.matdialog.open(DialogExampleComponent);
    dialogRef.afterClosed().subscribe(() => {
      // console.log('Dialog result: ');
    })
  }
}
