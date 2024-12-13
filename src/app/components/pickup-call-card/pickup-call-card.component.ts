import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;

  @Input() updatedAt: string = '2021-01-01 00:00:00';
  @Input() createdAt: string = '2021-01-01 00:00:00';
  @Input() notes: string = '';
  @Input() status: 'hold' | 'processing' | 'completed' = 'processing';
  @Input() amount: string = '';

  constructor() {}

  ngOnInit() {}
}
