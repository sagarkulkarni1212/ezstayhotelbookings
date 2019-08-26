import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelSearch } from '../models/hotel-search';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class EzstayhotelsService {

  private hotels:any = [
    {
      "hotelId": 1,
      "name": "NoTel",
      "rating": 4,
      "address": "Viman Nagar Pune",
      "city": "Pune",
      "phone": "2323232323",
      "hotelPhotoUrl": "URL",
      "rooms": [
        {
          "roomId": 1,
          "hotelId": 1,
          "name": "Deluxe Room",
          "occupancy": 4,
          "roomType": "AC Room",
          "amenities": [
            {
              "id": 1,
              "roomId": 1,
              "isWIFI": true,
              "isAC": true,
              "isSwimingPool": true
            }
          ]
        }
      ]
    }
  ];

  private _url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getHotelsByCity(hotelSearch: HotelSearch): any {//Observable<Hotel[]>
    return this.hotels;//this.http.get<Hotel[]>(this._url);
  }

}
