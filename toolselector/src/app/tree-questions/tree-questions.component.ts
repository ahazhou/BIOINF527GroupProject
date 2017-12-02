import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-questions',
  templateUrl: './tree-questions.component.html',
  styleUrls: ['./tree-questions.component.css']
})
export class TreeQuestionsComponent implements OnInit {
  q0 = {
    name: "q0",
    title: "What type of RNA sequencing do you want to do?",
    choices: ["Data Preprocessing", "Data Analysis", "Data Processing", "None of the above"]
  }
  q00 = {
    name: "q00",
    title: "What type of RNA data preprocessing do you want to do?",
    choices: ["Experimental Design", "Base Calling", "Read Quality Control", "None of the above"]
  }
  q01 = {
    name: "q01",
    title: "What type of RNA data analysis do you want to do?",
    choices: ["Exon Skipping Detection", "Time Couse Analysis", "Transposable Element Detection"]
  }
  q02 = {
    name: "q02",
    title: "What type of RNA data processing do you want to do?",
    choices: ["Normalization", "Known Transcript Alignment", "Read Alignment"]
  }

  public changeQuestion = (index, name) =>{
    if(String(name+index).length > 3 || String(name+index).length <= 0){
      
    }
    else{
      this.question = this[String(name+index)]
    }
  }

  question = this.q0
  constructor() {}

  ngOnInit() {
  }

}
