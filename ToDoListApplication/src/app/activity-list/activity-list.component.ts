import { Component, OnInit } from '@angular/core';
import {Activity} from '../shared/activity.model';
import {ActivityService} from '../shared/activity.service';
import { element } from 'protractor';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
  providers: [ActivityService]
})
export class ActivityListComponent implements OnInit {
  activityList: Activity[];
  constructor(private activityService: ActivityService) { }
  ngOnInit() {
    const x = this.activityService.getData();
    x.snapshotChanges().subscribe(item => {
      this.activityList = [];
      // tslint:disable-next-line:no-shadowed-variable
      item.forEach( element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.activityList.push(y as Activity);
      });
    });
  }
}
