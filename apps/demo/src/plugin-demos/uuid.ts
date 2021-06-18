import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedUuid } from '@demo/shared';
import {} from '@nativescript/uuid';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedUuid {}
