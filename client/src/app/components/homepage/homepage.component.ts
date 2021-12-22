import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor( private messageService: MessageService ) { }

  ngOnInit(): void {
  }

  checkInputs(): boolean {
    let errorAmount = 0;
    let errorMessage = "";

    if (this.username === "") {
      errorAmount++;
      errorMessage += errorAmount + " - Username cannot be empty \n";
    }

    if (this.password === "") {
      errorAmount++;
      errorMessage += errorAmount + " - Password cannot be empty \n";
    }

    if (errorAmount > 0) {
      this.messageService.add({severity:'error', summary: 'Error', detail: errorMessage});
      return false;
    } else {
      return true;
    }
  }

  login(): void {
    if (this.checkInputs() === true) {
      //TODO: Fare Login
    }
  }

}
