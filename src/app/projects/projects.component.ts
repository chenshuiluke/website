import { Component, OnInit } from '@angular/core';
import { Project } from "./project.model"
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Array<Project>;
  constructor() {
    this.projects = [
      {
        name:"ng-hackernews",
        description: "A HackerNews clone using Angular 4. Browse HackerNews without having to open tabs to view comments or having to click to go to the next page.",
        github_url: "https://github.com/chenshuiluke/ng-hackernews",
        url: "http://ng-hackernews.lukecs.com/",
        img: "assets/img/ng-hackernews.png"
      },
      {
        name:"JResume",
        description: "A Java resume generator",
        github_url: "https://github.com/chenshuiluke/jresume",
        img: "assets/img/jresume.png"
      }
    ];
  }

  ngOnInit() {
  }

}
