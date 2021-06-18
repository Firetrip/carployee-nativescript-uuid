import { device } from '@nativescript/core/platform';

function getUUID() {
	return device ? device.uuid : null;
}

exports.getUUID = getUUID;
