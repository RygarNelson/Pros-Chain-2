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
  public login_disabled: boolean = false;

  constructor( private toast: Toast, private sampleservice: SampleService ) { }

  ngOnInit(): void {
  }

  private emptyValues(): void {
    this.username = "";
    this.password = "";
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
      this.toast.showToastMessage("error", "Error", errorMessage, true);
      return false;
    } else {
      return true;
    }
  }

  login(): void {
    this.login_disabled = true;
    if (this.checkInputs() === true) {
      this.sampleservice.checkServerConnection().subscribe({
        next: (payload: any) => {
          if (payload.success) {
            this.toast.showToastMessage("success", "Success", "Server connection successful");
          }
        },
        error: (error) => {
          console.log(error);
          this.emptyValues();
          this.login_disabled = false;
          this.toast.showToastMessage("error", "Error", error, true);
        }
      })
    } else {
      this.emptyValues();
      this.login_disabled = false;
    }
  }

}
