import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';

import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  locations: string[] = [];
  addLocationFormData = {
    zipcode: '',
  };

  private subsink = new SubSink();

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.subsink.sink = this.locationService.location$.subscribe(
      (locations) => (this.locations = locations),
    );
  }

  addLocation(): void {
    this.locationService.addLocation(this.addLocationFormData.zipcode);
  }
}
