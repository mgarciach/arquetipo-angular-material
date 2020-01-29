import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

    @Input() title: string;
    @Input() isMobile: boolean;
    @Output() toogleSidebar: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    toogle = () => {
        this.toogleSidebar.emit();
    }
}
