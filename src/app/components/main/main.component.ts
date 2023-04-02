import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedsService } from 'src/app/services/feeds.service';
import { VideoLayoutComponent } from './video-layout/video-layout.component';
import { VideoService } from 'src/app/services/video.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
	public allFeeds: any[] = [];
	public competitions: string[] = [];

	constructor(
		private feedsService: FeedsService,
		private videoService: VideoService,
		private router: Router,
	){}

	ngOnInit(){
		this.getFeeds();
	}

	getFeeds(){
		this.feedsService.getFeeds().subscribe(
		{ 
			next: (data)=>{
			this.allFeeds = data.response;
			this.competitions = this.videoService.getCompetitions(this.allFeeds);
			console.log('ALL COMPETITION', this.competitions);
			
			console.log('ALL FEEDS', this.allFeeds)
			},
			error: (err: any) => { },
			complete: () => { }
		}
		);
	}

	getFeedsByCompetition(competitionName: string){
		return this.allFeeds.filter(feed=> feed.competition == competitionName)
	}

	redirectVideoLayout(feed: any){
		this.videoService.setActiveFeedVideos(feed.videos);
		localStorage.setItem('videos', JSON.stringify(feed.videos));
		this.router.navigate(['videos']);
	}
}
