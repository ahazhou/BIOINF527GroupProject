import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-questions',
  templateUrl: './tree-questions.component.html',
  styleUrls: ['./tree-questions.component.css']
})
export class TreeQuestionsComponent implements OnInit {
  question1 = {
    title: "What type of data do you have?",
    choices: ["choice A", "choice B", "choice C", "Other"]
  }
  question = this.question1
  constructor() {}

  ngOnInit() {
  }

}
