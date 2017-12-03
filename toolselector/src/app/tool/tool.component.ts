import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
	heading = 'tools';

  toolname: string
  constructor(private route: ActivatedRoute) {
    this.toolname = route.snapshot.params['id'];
  }

  public t111 = {
    name: "Proper",
    description: "",
    link: ""
  }
  public t112 = {
    name: "AnalyzeReplication",
    description: "description goes here",
    link: ""
  }
  public t113 = {
    name: "RNAtor",
    description: "description goes here",
    link: ""
  }
  public t114 = {
    name: "BwB",
    description: "description goes here",
    link: ""
  }
  public t121 = {
    name: "Alta-cyclic",
    description: "description goes here",
    link: ""
  }
  public t122 = {
    name: "FlowgramFixer",
    description: "description goes here",
    link: ""
  }
  public t123 = {
    name: "DeepNano",
    description: "description goes here",
  	link: ""
  }
  public t124 = {
    name: "PyroBayes",
    description: "description goes here",
  	link: ""
  }
  public t131 = {
    name: "FastQC",
    description: "description goes here",
  	link: ""
  }
  public t132 = {
    name: "TrimGalore!",
    description: "description goes here",
  	link: ""
  }
  public t133 = {
    name: "S-MART",
    description: "description goes here",
  	link: ""
  }
  public t134 = {
    name: "CLC Genomics Workbench",
    description: "description goes here",
  	link: ""
  }
  public t211 = {
    name: "BitSeq",
    description: "description goes here",
  	link: ""
  }
  public t212 = {
    name: "DESeq",
    description: "description goes here",
  	link: ""
  }
  public t213 = {
    name: "Limma",
    description: "description goes here",
  	link: ""
  }
  public t221 = {
  	name: "RNA-eXpress",
    description: "description goes here",
  	link: ""
  }
  public t222 = {
    name: "SeqMonk",
    description: "description goes here",
  	link: ""
  }
  public t223 = {
    name: "RSEM",
    description: "description goes here",
  	link: ""
  }
  public t231 = {
    name: "BOWTIE",
    description: "description goes here",
  	link: ""
  }
  public t232 = {
    name: "BWA",
    description: "description goes here",
  	link: ""
  }
  public t233 = {
    name: "BLAST",
    description: "description goes here",
  	link: ""
  }
  public t311 = {
    name: "AStalavista",
    description: "description goes here",
  	link: ""
  }
  public t312 = {
    name: "AltAnalyze",
    description: "description goes here",
  	link: ""
  }
  public t313 = {
    name: "spliceR",
    description: "description goes here",
  	link: ""
  }
  public t321 = {
    name: "maSigPro",
    description: "description goes here",
  	link: ""
  }
  public t322 = {
    name: "diffsplicing",
    description: "description goes here",
  	link: ""
  }
  public t323 = {
    name: "timeSeq",
    description: "description goes here",
  	link: ""
  }
  public t331 = {
    name: "LIONS",
    description: "description goes here",
  	link: ""
  }
  public t332 = {
    name: "TEtools",
    description: "description goes here",
  	link: ""
  }
  public t333 = {
    name: "RepEnrich",
    description: "description goes here",
  	link: ""
  }
  

  ngOnInit() {
    
  }

}
