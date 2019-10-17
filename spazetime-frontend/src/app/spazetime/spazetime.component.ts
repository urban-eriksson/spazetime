import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-spazetime',
  templateUrl: './spazetime.component.html',
  styleUrls: ['./spazetime.component.scss']
})
export class SpazetimeComponent implements OnInit, OnDestroy {
  solarTime: Date;
  spazeSign: string;
  spazeHours: number;
  spazeMinutes: number;
  spazeSeconds: number;
  interval: any;


  constructor() { }

  ngOnInit() {
    this.getTimeAndLocation();
    this.startTimeLocationLoop();
  }

  startTimeLocationLoop() {
    this.interval = setInterval(() => {
      this.getTimeAndLocation();
    }, 1000);

  }

  isLeapYear(date: Date) {
    const year = date.getUTCFullYear();
    if ((year & 3) !== 0) {
       return false;
    } else {
      return ((year % 100) !== 0 || (year % 400) === 0);
    }
  };


  getTimeAndLocation(): void {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);

          const spaze = - position.coords.longitude / 15;
          const now = new Date();
          const start = new Date(now.getFullYear(), 0, 0);
          const delta = now.getTime() - start.getTime();
          const oneDay = 1000 * 60 * 60 * 24;
          const dayFraction = delta / oneDay;
          let gamma = 0;
          if (this.isLeapYear(now)) {
            gamma = 2 * Math.PI / 366 * (dayFraction - 0.5);
          } else {
            gamma = 2 * Math.PI / 365 * (dayFraction - 0.5);
          }
          const eqtime = 229.18 * (0.000075 + 0.001868 * Math.cos(gamma)
           - 0.032077 * Math.sin(gamma)
           - 0.014615 * Math.cos(2 * gamma)
           - 0.040849 * Math.sin(2 * gamma));
          console.log(dayFraction);
          console.log(eqtime);
          const utcDate = (new Date()).getTime();
          console.log(utcDate);
          const localDate = utcDate - spaze * 60000 * 60;
          this.solarTime = new Date(localDate);

          if (spaze < 0) {
            this.spazeSign = '-';
          } else {
            this.spazeSign = ' ';
          }

          const absSpaze = Math.abs(spaze);
          this.spazeHours = Math.floor(absSpaze);
          this.spazeMinutes = Math.floor((absSpaze - this.spazeHours) * 60);
          this.spazeSeconds = Math.floor(((absSpaze - this.spazeHours) * 60 - this.spazeMinutes) * 60);

        });
    } else {
       console.log('No support for geolocation');
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
