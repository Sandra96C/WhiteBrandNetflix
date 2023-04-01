import { Component, OnInit } from '@angular/core';
import { FeedsService } from 'src/app/services/feeds.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public allFeeds: any[] = [];
  constructor(
    private feedsService: FeedsService
  ){}

  ngOnInit(){
    this.getFeeds();
  }

  getFeeds(){
    this.feedsService.getFeeds().subscribe(
      { 
        next: (data)=>{
          this.allFeeds = data.response;
          console.log('ALL FEEDS', this.allFeeds)
        },
        error: (err: any) => { },
        complete: () => { }
      }
    );
  }
}
