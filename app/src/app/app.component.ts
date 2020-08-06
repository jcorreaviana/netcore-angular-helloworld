import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result = '';

  getWeatherForecast()
  {
    axios.get('https://localhost:5001/WeatherForecast')
      .then((res) => {this.result = JSON.stringify(res.data)}).catch((error) => console.log(error))
  }
}
