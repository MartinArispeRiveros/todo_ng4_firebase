import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../shared/activity.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ActivityService]
})
export class ActivityComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.activityService.insertActivity(form.value);
    form.resetForm();
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.reset();
      this.activityService.selectedActivity = {
        $key: null,
        active: false,
        activity: null,
        dateCreate: null,
        dateToDo: null
      };
    }
  }

}
