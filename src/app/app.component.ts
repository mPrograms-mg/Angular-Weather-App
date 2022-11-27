import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  weatherData: any;
  cityName: string = 'Surat';
  @ViewChild('search') form: any;

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}

  onWeather() {
    this.getWeatherData(this.cityName);
    this.form.reset();
  }

  private getWeatherData(cityName: string) {
    this.weather.getWeather(cityName).subscribe((res: any) => {
      this.weatherData = res;
    });
  }
}
