import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  title = "Stop Watch";
  counter: string = "00:00:00";
  private start: any;
  private hh:number = 0;
  private mm:number = 0;
  private ss:number = 0;

  constructor() { }

  ngOnInit() {
  }

  startTimer(){
    this.start = setTimeout(()=>{
        this.incrementTimer();
        this.startTimer();
      }, 100)
    
  }

  pauseTimer(){
    clearTimeout(this.start);
  }

  stopTimer() {
    this.ss = 0;
    this.mm = 0;
    this.hh = 0;
    this.counter = "00:00:00";
  }

  private incrementTimer(){
    this.ss += 1;
    if(this.ss >= 60){
      this.mm += 1;
      this.ss = 0; 
    }
    if(this.mm >= 60){
      this.hh += 1;
      this.mm = 0;
    }
    this.counter = (this.hh ? (this.hh > 9 ? this.hh : "0" + this.hh) : "00") + ":" + (this.mm ? (this.mm > 9 ? this.mm : "0" + this.mm) : "00") + ":" + (this.ss > 9 ? this.ss : "0" + this.ss);
  }
}
