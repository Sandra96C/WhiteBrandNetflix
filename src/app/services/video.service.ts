import { Injectable } from "@angular/core";
import { FeedsService } from "./feeds.service";

@Injectable({
  	providedIn: "root",
})

export class VideoService {
	private activeVideos: any[] = [];
  	constructor() {}

	getCompetitions(feeds: any[]) {
		return feeds
			.map((feed: any) => feed.competition)
			.filter((value, index, feeds) => feeds.indexOf(value) === index);
	}

	setActiveFeedVideos(videos: any[]){
		this.activeVideos = videos;
	}

	getActiveFeedVideos(){
		return this.activeVideos;
	}
}
