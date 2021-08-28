import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/shared/models/weather';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: Weather | undefined
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSearch(city: string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather)
  }

}
