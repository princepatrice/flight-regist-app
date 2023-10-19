import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

enum OperationStatus {
  default = 0,
  success = 1,
  error = 2
}

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent {
  form!: FormGroup;
  operationStatus: OperationStatus = OperationStatus.default
  loading: boolean = false

  constructor(private _authService: AuthentificationService, private _formBuilder: FormBuilder,
    private _router: Router, private _reservation: ReservationService) {
    if (!this._authService.isLoggedIn) {
      this._router.navigate(["/login"])
    }
    this.initForm()
  }

  initForm() {
    this.form = this.form = this._formBuilder.group({
      airline: "",
      arrivalDate: "",
      arrivalTime: "",
      flightNumber: "",
      numOfGuests: 1,
      comments: ""
    })
  }

  addFlight() {
    this.operationStatus = OperationStatus.default
  }

  onSubmit() {
    this.loading = true
    const values = this.form.value
    console.log(values)
    this._reservation.addOne(values).subscribe({
      next: (value) => { this.successOperation() },
      error: (err) => { this.failedOperation(err) },
      complete: () => {
        this.loading = false
      },
    })
  }

  successOperation() {
    this.operationStatus = OperationStatus.success
    this.initForm()
    console.log("success")
  }

  failedOperation(err: any) {
    this.operationStatus = OperationStatus.error
    console.log(err)
  }
}
