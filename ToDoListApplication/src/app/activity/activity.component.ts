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
    this.resetActivityForm(form);
  }

  resetActivityForm(form: NgForm) {
    form.resetForm();
  }

}
