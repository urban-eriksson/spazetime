import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spazetime',
  templateUrl: './spazetime.component.html',
  styleUrls: ['./spazetime.component.scss']
})
export class SpazetimeComponent implements OnInit {
  utcTime: Date;
  spazeSign: string;
  spazeHours: number;
  spazeMinutes: number;
  spazeSeconds: number;


  constructor() { }

  ngOnInit() {
    // this.startUtcTime();
  }

  startUtcTime(): void {
    setInterval(() => {
      this.utcTime = new Date();
      console.log(this.utcTime);
    }, 1000);

  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);

          const spaze = - position.coords.longitude / 15;
          const utcDate = (new Date()).getTime();
          console.log(utcDate);
          const localDate = utcDate - spaze * 60000 * 60;
          this.utcTime = new Date(localDate);

          if (position.coords.longitude > 0) {
            this.spazeSign = '-';
          } else {
            this.spazeSign = ' ';
          }
          const absSpaze = Math.abs(position.coords.longitude / 15);
          this.spazeHours = Math.floor(absSpaze);
          this.spazeMinutes = Math.floor((absSpaze - this.spazeHours) * 60);
          this.spazeSeconds = Math.floor(((absSpaze - this.spazeHours) * 60 - this.spazeMinutes) * 60);
        });
    } else {
       console.log('No support for geolocation');
    }
  }

}
