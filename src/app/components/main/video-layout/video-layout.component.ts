import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { VideoService } from 'src/app/services/video.service';

type videoObject= {
	title: string,
	iframe: string,
	videoUrl: string
}
	
@Component({
	selector: 'app-video-layout',
	templateUrl: './video-layout.component.html',
	styleUrls: ['./video-layout.component.scss'],
	encapsulation: ViewEncapsulation.None,
})

export class VideoLayoutComponent implements OnInit {
	public videos: videoObject[] = [];
	public localStorageData: any[] = [];
	public api?: VgApiService;

	constructor(
		private sanitizer: DomSanitizer,
		private videoServices: VideoService,
	){}
	
	ngOnInit(){
		// this.getVideosActive();
		this.localStorageData = JSON.parse(localStorage.getItem('videos')  || '[]');   
		this.getOnlyTitleAndVideoUrls();
		console.log('VIDEOS', this.videos);
	}

	getVideosActive(){
		this.getOnlyTitleAndVideoUrls(this.videoServices.getActiveFeedVideos());    
	}

	transform(v:string):SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(v);
	}

	getOnlyTitleAndVideoUrls(videos: any[] = []){
		this.localStorageData.forEach((video)=>{
			this.videos.push({
				title: video.title,
				iframe: video.embed.replace('/v/', '/'),
				videoUrl: video.embed.split("src='")[1].split("'")[0].replace('/v/', '/')
			})
			console.log('THIS VIDEOS', this.videos);
		});
	}

	onPlayerReady(source: VgApiService) {
		this.api = source;
		this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.play.bind(this))
	}
		
	play() {
		if(this.api)
		this.api.play();
	}

	sanitize(url:string){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}