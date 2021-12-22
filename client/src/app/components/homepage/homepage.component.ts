import { Component, OnInit } from '@angular/core';
import { Toast } from 'src/app/classes/toast';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor( private toast: Toast, private sampleservice: SampleService ) { }

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
      this.toast.showToastMessage("error", "Error", errorMessage);
      return false;
    } else {
      return true;
    }
  }

  login(): void {
    if (this.checkInputs() === true) {
      this.sampleservice.checkServerConnection().subscribe({
        next: (payload: any) => {
          if (payload.success) {
            this.toast.showToastMessage("success", "Success", "Server connection successful");
          }
        },
        error: (error) => {
          console.log(error);
          this.toast.showToastMessage("error", "Error", error);
        }
      })
    }
  }

}
