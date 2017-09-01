import {Component, Inject, OnInit} from '@angular/core';
import {Project} from "../project/project.model";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(@Inject('PROJECT_ARR') public projects: Array<Project>) { }

  ngOnInit() {
  }

}
