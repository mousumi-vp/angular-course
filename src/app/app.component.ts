import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [...COURSES];
  onCourseSelected(course:Course) {
    console.log("hgjhgjhhjkhkhkjh",course);
  }
  constructor(private apiService: ApiService) { }

  //ngOnInit(): void {
  //  this.getDataFromApi();
   // this.postDataToApi();
  //}

  // Method to call the GET API
  getDataFromApi() {
    this.apiService.getData().subscribe(
      response => {
        console.log('GET Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  // Method to call the POST API
  postDataToApi() {
    const data = { Name: 'John' };  // Sample data to send
    this.apiService.postData(data).subscribe(
      response => {
        console.log('POST Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
