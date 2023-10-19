import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FlightInfoPayload } from './app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private _httpClient: HttpClient) { }

  addOne(flight: FlightInfoPayload) {
    return this._httpClient.post<any>(environment.API_URL, flight);
  }
}
