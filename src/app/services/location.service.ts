import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocalStorageRef } from '../refs/local-storage.ref';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  static readonly LOCATIONS_STORAGE_KEY = 'APP_LOCATIONS';

  private _locations$ = new BehaviorSubject<string[]>(this._locations);

  constructor(private localStorageRef: LocalStorageRef) {}

  get location$(): Observable<string[]> {
    return this._locations$.asObservable();
  }

  private get _locations(): string[] {
    const item = this.localStorageRef.localStorage.getItem(
      LocationService.LOCATIONS_STORAGE_KEY,
    );
    return JSON.parse(String(item)) ?? [];
  }

  private set _locations(value: string[]) {
    const item = JSON.stringify(value);
    this.localStorageRef.localStorage.setItem(
      LocationService.LOCATIONS_STORAGE_KEY,
      item,
    );
    this._locations$.next(value);
  }

  addLocation(location: string): void {
    const locations = this._locations;
    if (!locations.includes(location)) {
      locations.push(location);
    }
    this._locations = locations;
  }

  removeLocation(location: string): void {
    const locations = this._locations;
    const locationIndex = locations.indexOf(location);
    if (locationIndex > -1) {
      locations.splice(locationIndex, 1);
    }
    this._locations = locations;
  }
}
