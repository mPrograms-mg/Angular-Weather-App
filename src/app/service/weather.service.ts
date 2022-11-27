import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  myApiKey: string = '041e96e55af2c8b8debc3ecd3411748c';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.myApiKey}`
    );
  }
}
