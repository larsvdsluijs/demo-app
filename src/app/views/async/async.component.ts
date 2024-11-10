import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit, OnDestroy {
  private pendingRequests: number = 0;
  private startTime: number = 0;
  private intervalId: any;
  elapsedTime: string = '0.00';  // To display the stopwatch
  screenTexts: string[] = [];

  ngOnInit() {
    this.startTimer();
    this.fetchingImages();
    this.fetchingProducts();
    this.fetchingUsers();
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
    }, 10);
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

  checkRequestsComplete() {
    if (this.pendingRequests === 0) {
      this.stopTimer();
    }
  }

  fetchingImages() {
    this.pendingRequests++;
    this.screenTexts.push('Fetching images...');
    setTimeout(() => {
      this.pendingRequests--;
      this.screenTexts.push('Images fetched!');
      this.checkRequestsComplete();
    }, 2000);
  }

  fetchingProducts() {
    this.pendingRequests++;
    this.screenTexts.push('Fetching products...');
    setTimeout(() => {
      this.pendingRequests--;
      this.screenTexts.push('Products fetched!');
      this.checkRequestsComplete();
    }, 2000);
  }

  fetchingUsers() {
    this.pendingRequests++;
    this.screenTexts.push('Fetching users...');
    setTimeout(() => {
      this.pendingRequests--;
      this.screenTexts.push('Users fetched!');
      this.checkRequestsComplete();
    }, 2000);
  }
}
