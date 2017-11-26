import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from "./project.model";
@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project:Project;

  constructor(private route:ActivatedRoute, @Inject('PROJECT_ARR') public projects: Array<Project>) {
    let project_name:string = this.route.snapshot.params['project_name'];
    this.project = this.projects.find((project) => {
      return project.name === project_name;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let project_name:string = params['project_name'];
      this.project = this.projects.find((project) => {
        return project.name === project_name;
      });
    });
    window.scrollTo(0, 0);
  }

}
