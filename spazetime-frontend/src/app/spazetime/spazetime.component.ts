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

  getTimeAndLocation(): void {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);

          const spaze = - position.coords.longitude / 15;
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
