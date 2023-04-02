import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FeedsService {
	private urlWithToken:string = 'https://www.scorebat.com/video-api/v3/feed/?token=NzIwNDJfMTY4MDM1NTQzOF9hNjc1YzUyYTU0MmFjOGEyMTc5ZDQ3NWQ2NzIxMDc1N2QwNTk3ODQ3';
	constructor(
		private http: HttpClient
	) {}
	
	getFeeds(): Observable<any>{
		return this.http.get(this.urlWithToken);
	}
}
