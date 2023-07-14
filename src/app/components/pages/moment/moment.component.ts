import { Component } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {
  moment?: Moment;
  constructor(private momentService: MomentService,private route:ActivatedRoute){}
  ngOnInit():void {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    this.momentService
    .getMoment(id)
    .subscribe((item) => this.moment = item.data)
  }
}
