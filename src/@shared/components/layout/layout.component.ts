import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';

const DEFAULT_VALUES = {
  fixedTopPx: 56,
  maxWidthPx: 600
};

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {

  @Input() appTitle: string;

  fixedTopPx: number = DEFAULT_VALUES.fixedTopPx;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia(`(max-width: ${DEFAULT_VALUES.maxWidthPx}px)`);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
