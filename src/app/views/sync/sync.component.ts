import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-sync',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss']
})
export class SyncComponent implements OnInit, OnDestroy {
  private startTime: number = 0;
  private intervalId: any;
  elapsedTime: string = '0.00';  // Displayed stopwatch time
  screenTexts: string[] = [];

  ngOnInit() {
    this.startTimer();
    this.fetchingImages();
  }

  ngOnDestroy() {
    this.stopInterval();  // Clean up interval when component is destroyed
  }

  startTimer() {
    this.startTime = Date.now();
    this.screenTexts.push('Starting requests...');
    this.intervalId = setInterval(() => {
      const elapsed = (Date.now() - this.startTime) / 1000;
      this.elapsedTime = elapsed.toFixed(2);
    }, 10);  // Updates every 10ms for a smoother stopwatch
  }

  stopTimer() {
    this.stopInterval();
  }

  stopInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  fetchingImages() {
    this.screenTexts.push('Fetching images...');
    setTimeout(() => {
      this.screenTexts.push('Images fetched!');
      this.fetchingProducts();  // Move to the next function after completion
    }, 2000);
  }

  fetchingProducts() {
    this.screenTexts.push('Fetching products...');
    setTimeout(() => {
      this.screenTexts.push('Products fetched!');
      this.fetchingUsers();  // Move to the next function after completion
    }, 2000);
  }

  fetchingUsers() {
    this.screenTexts.push('Fetching users...');
    setTimeout(() => {
      this.screenTexts.push('Users fetched!');
      this.stopTimer();  // Stop the timer after the last function completes
    }, 2000);
  }
}
