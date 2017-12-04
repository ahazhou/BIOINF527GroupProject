import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-overview',
  templateUrl: './tool-overview.component.html',
  styleUrls: ['./tool-overview.component.css']
})
export class ToolOverviewComponent implements OnInit {

	toolnames = ["Proper", "AnalyzeReplication", "RNAtor", "BwB", "Alta-cyclic", "FlowgramFixer", "DeepNano", "PyroBayes", "FastQC", 
	"TrimGalore", "SMART", "clcgenomicsworkbench", "BitSeq", "DesSeq", "Cufflinks", "RNAeXpress", "SeqMonk", "RSEM", "Bowtie", "BWA", 
	"BLAST", "AStalavista", "AltAnalyze", "spliceR", "maSigPro", "diffsplicing", "timeSeq", "LIONS", "TEtools", "RepEnrich"];

  
constructor() { }
  
  ngOnInit() {
  }

}
