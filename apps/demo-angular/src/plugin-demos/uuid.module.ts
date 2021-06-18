import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { UuidComponent } from './uuid.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: UuidComponent }])],
	declarations: [UuidComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class UuidModule {}
