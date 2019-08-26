import { Component, OnInit } from '@angular/core';
import { EzstayhotelsService } from '../services/ezstayhotels.service';
import { HotelSearch } from '../models/hotel-search';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-ezstayhome',
  templateUrl: './ezstayhome.component.html',
  styleUrls: ['./ezstayhome.component.css']
})
export class EzstayhomeComponent implements OnInit {

  constructor(private ezstayhotelsService: EzstayhotelsService) { }

  private hotelSearchParam: HotelSearch;
  private hotels: Hotel[] = [];

  ngOnInit() {
    document.getElementById("ezStayGuests")["defaultValue"] = "0";
    document.getElementById("ezStayRooms")["defaultValue"] = "0";

    const hotelsObservable = this.ezstayhotelsService.getHotelsByCity(this.hotelSearchParam);
    hotelsObservable.subscribe((hotelsData: Hotel[]) => {
      this.hotels = hotelsData;
    });
    //this.hotels =this.ezstayhotelsService.getHotelsByCity(this.hotelSearchParam);
  }
}
