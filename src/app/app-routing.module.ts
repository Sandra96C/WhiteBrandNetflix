import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { VideoLayoutComponent } from './components/main/video-layout/video-layout.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'videos', component: VideoLayoutComponent }
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
