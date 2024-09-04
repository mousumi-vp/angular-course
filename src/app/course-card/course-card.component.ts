import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course
  @Input({ required:true }) 
    index:number
  @Output()
  courseSelected = new EventEmitter<Course>();
  constructor(){}
  ngOnInit(){
  }
  onClickBtn() {
    console.log("jkhfjkd kahdkhKJD JNDSKJnkjsnjk.....")
    this.courseSelected.emit(this.course);
  }
  cardClasses() {
    return {
      'bignner': this.course.category=="BEGINNER",
    'course-card': true
    }
  }
  cardStyle() {
return {
      'background-image': 'url('+this.course.iconUrl+')',
    }
}
}
