import { getUUID } from '@carployee/uuid';
import { Observable, Frame } from '@nativescript/core';

export class MainViewModel extends Observable {
	uuid: string = getUUID();

	viewDemo(args) {
		Frame.topmost().navigate({
			moduleName: `plugin-demos/${args.object.text}`,
		});
	}
}
