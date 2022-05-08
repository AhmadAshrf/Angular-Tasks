import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  stars=[1,2,3,4,5]
  @Input() rate:number = 0
  @Output() starsChanged = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onRateChanged(rate:number){
    this.rate = rate
    this.starsChanged.emit(rate)
  }


}
