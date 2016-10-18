import { Component, KeyValueDiffers, SkipSelf } from '@angular/core';
import { ProgressState } from 'e2e4';

import { RtListService } from './list-service';
import { ListStateComponent } from './list-state-component';

@Component({
    selector: 'rt-list-state-failed',
    template: `<ng-content *ngIf="isVisible"></ng-content>`
})
export class ListStateFailedComponent extends ListStateComponent {
    constructor( @SkipSelf() listService: RtListService, differs: KeyValueDiffers) {
        super(listService, differs, ProgressState.Fail);
    }
}
