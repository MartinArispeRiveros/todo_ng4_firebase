import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database-deprecated';
import { Console } from '@angular/core/src/console';
@Injectable()
export class ActivityService {

  activityList: AngularFireList<any> ;
  selectedActivity: Activity = new Activity();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.activityList = this.firebase.list('to-do-list');
    return this.activityList;
  }

  insertActivity(act: Activity) {
    this.getData();
    this.activityList.push({
      active: false,
      activity: act.activity,
      dateCreate: act.dateCreate,
      dateToDo: act.dateToDo
    });
  }

}
