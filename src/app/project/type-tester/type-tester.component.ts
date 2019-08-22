import {Component, OnInit} from '@angular/core';
import {FirebaseService} from './firebase-service.service';

@Component({
  selector: 'app-type-tester',
  templateUrl: './type-tester.component.html',
  styleUrls: ['./type-tester.component.css']
})
export class TypeTesterComponent {
  dbService: FirebaseService;
  content: string;
  input: string;
  timeString: string;
  endTime: string;
  wrapperColor: string;
  started: boolean;
  finished: boolean;
  time: number;
  interval;

  constructor(dbService: FirebaseService) {
    this.dbService = dbService;
    this.wrapperColor = 'grey';
    this.started = false;
    this.finished = false;
    this.timeString = '00:00:00';
    this.time = 0;
    this.input = '';
    this.content = 'Noon. London: my flat. Ugh. The last thing on earth I feel physically, emotionally or mentaly equipped to do is' +
      ' drive to Una and Geoffrey Alconbury\'s New Year\'s Dat Turket Curry Buffet in Graftoon Underwood. Geoffery and Una Alconbury ' +
      'are my parents\' best friends and, as Uncle Geoffrey never tires of reminding me, have known me since I was running the lawn with ' +
      'no clothes on. My mother rang up at 8.30 in the morning last August Bank Holidat and forced me to promise to go. ' +
      'She approached it via a cunningly circuitous route.';

  }

  onChange(val) {
    if (!this.started && val !== '') {
      this.startTimer();
    }
    this.input = val;
    this.checkInput();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.time += 10;
      let minute = Math.floor(this.time / (1000 * 60));
      minute = this.addZero(minute);
      let seconds = Math.floor((this.time - minute * 60 * 1000) / 1000);
      seconds = this.addZero(seconds);
      let milSec = Math.floor((this.time - seconds * 1000 - minute * 60 * 1000) / 10);
      milSec = this.addZero(milSec);
      this.timeString = minute + ':' + seconds + ':' + milSec;
    }, 10);
    this.started = true;
  }

  endTimer() {
    clearInterval(this.interval);
  }

  restart() {
    this.timeString = '00:00:00';
    this.endTimer();
    this.resetInput();
    this.started = false;
    this.finished = false;
    this.wrapperColor = 'grey';
    this.endTime = '';
  }

  checkInput() {
    if (this.input === this.content) {
      this.wrapperColor = '#429890';
      this.calcTime();
      this.endTimer();
      this.finished = true;
    } else {
      this.wrapperColor = '#E95D0F';
    }
  }

  resetInput() {
    this.input = '';
  }

  addZero(s) {
    if (s < 10) {
      return '0' + s;
    }
    return s;
  }

  calcTime() {
    if (this.time > 0) {
      const endTimeInt = parseInt((this.content.split(' ').length / ((this.time / 1000) / 60)).toFixed(2), 10);
      this.endTime = endTimeInt.toString();
      this.dbService.addResult({result: endTimeInt});
    }
  }

}
