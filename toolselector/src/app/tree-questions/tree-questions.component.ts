import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-questions',
  templateUrl: './tree-questions.component.html',
  styleUrls: ['./tree-questions.component.css']
})
export class TreeQuestionsComponent implements OnInit {
  public q0 = {
    name: "q0",
    title: "What type of RNA sequencing do you want to do?",
    choices: ["Data Preprocessing", "Data Analysis", "Data Processing"]
  }
  public q00 = {
    name: "q00",
    title: "What type of RNA data preprocessing do you want to do?",
    choices: ["Experimental Design", "Base Calling", "Read Quality Control"],
    links: ["/tool", "/tool", "/tool"]
  }
  public q01 = {
    name: "q01",
    title: "What type of RNA data analysis do you want to do?",
    choices: ["Exon Skipping Detection", "Time Couse Analysis", "Transposable Element Detection"],
    links: ["/tool", "/tool", "/tool"]
  }
  public q02 = {
    name: "q02",
    title: "What type of RNA data processing do you want to do?",
    choices: ["Normalization", "Known Transcript Alignment", "Read Alignment"],
    links: ["/tool", "/tool", "/tool"]
  }

  public changeQuestion = (index, name, isnone) =>{
    if(isnone){
      window.location.href = "/not-available-yet"
    }
    else if(this[String(name+index)] == null){
      window.location.href = this[name].links[index]
    }
    else{
      this.question = this[String(name+index)]
    }
  }

  public previousQuestion = (current) =>{
    if(current.name.slice(0,-1).length == 1){
      window.location.href = "/home"
    }
    else{
      this.question = this[current.name.slice(0,-1)]
    }
  }

  question = this.q0
  constructor() {}

  ngOnInit() {
  }

}
