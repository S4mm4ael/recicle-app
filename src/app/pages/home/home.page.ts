import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToPickUpCalls() {
    this.router.navigate(['/pick-up-calls']);
  }

  createPickUpCall() {
    this.router.navigate(['/pick-up-call']);
  }
}
