import { Component, NgZone } from '@angular/core';
import { DemoSharedUuid } from '@demo/shared';
import {} from '@nativescript/uuid';

@Component({
	selector: 'demo-uuid',
	templateUrl: 'uuid.component.html',
})
export class UuidComponent {
	demoShared: DemoSharedUuid;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedUuid();
	}
}
