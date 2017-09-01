import {Component, Inject, OnInit} from '@angular/core';
import { Project } from "../project/project.model";
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(@Inject('PROJECT_ARR') public projects: Array<Project>) {
  }

  ngOnInit() {
  }

}
