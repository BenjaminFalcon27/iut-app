import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/students';
import { Observable } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  studentId: number;
  student$: Observable<Student>;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {
    route.params.subscribe((params) => {
      this.studentId = params['id'];
    });
  }

  ngOnInit(): void {
    this.student$ = this.studentService.getById(this.studentId);
  }

  goBack() {
    this.location.back();
  }

  showReceivedValue(value: boolean) {
    console.log(value);
  }
}
