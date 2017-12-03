import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    title: "Where are you in the process of preprocessing?",
    choices: ["I'm just starting.", "I already have all of the data."],
  }
  public q01 = {
    name: "q01",
    title: "What type of RNA data analysis do you want to do?",
    choices: ["Exon Skipping Detection", "Time Couse Analysis", "Transposable Element Detection"],
  }
  public q02 = {
    name: "q02",
    title: "What type of RNA data processing do you want to do?",
    choices: ["Normalization of data", "Known Transcript Quantification", "Read Alignment"],
  }
  public q000 = {
    name: "q000",
    title: "Experimental Design: What are you looking to do?",
    choices: ["Calculate the sample size.", "Calculate the power.", "Calculate the number of sequencing reads or replicates.", "Create an experiment workflow."],
    id: ["Proper", "AnalyzeReplication", "RNAtor", "BwB"]
  }
  public q001 = {
    name: "q001",
    title: "Are you more interested in base calling or quality control of your data?",
    choices: ["Base Calling", "Quality Control"]
  }
  public q010 = {
    name: "q010",
    title: "What feature would you like the tool to include?",
    choices: ["Support of alternative splicing transcriptional landscape visualization or usage even throughout an incomplete seequencing/annotation process.", "Comprehensive methods for analysis of a wide range of data.", "Sorts alternative splicing and discovers coding potential."],
    id: ["AStalavista", "AltAnalyze", "spliceR"]
  }
  public q011 = {
    name: "q011",
    title: "What type of feature would you like the tool to include?",
    choices: ["Regression based analysis for multiple time course transcriptomics data.", "Ranking of genes and transcripts according to the temporal change they show in their expression levels.", "A fast method to detect the differentially expressed genes in time course RNA-seq using a negative binomial mixed-effect model."],
    id: ["maSigPro", "diffsplicing", "timeSeq"]
  }
  public q012 = {
    name: "q012",
    title: "What sort of functionality would you like the tool to include?",
    choices: ["Quantification of contribution of transposable element promoters to the transcriptome from the RNA seq data.", "Annotation of the intersection between the assembly, reference gene set, and repeat set.", "Mapping of RNA-seq data from classical mRNAs or small RNAs onto a list of TE sequences.", "Takes into account the diversity of  transposable element sequences.", "Studies genome-wide transcriptional regulation of repetitive elements.", "Supports custom repetitive element or repeat feature annotation in bed format."],
    id: ["LIONS", "LIONS", "TEtools", "TEtools", "RepEnrich", "RepEnrich"]
  }
  public q020 = {
    name: "q020",
    title: "Select the best description of the desired tool's functionality.",
    choices: ["An application that infers expression levels of individual transcripts from RNA-sequencing data and estimates differential expression  between conditions.","A method for differential analysis of RNA-seq count data, by means of shrinkage estimation for dispersions and fold changes to enhance stability and interpretability of estimates.","The ability to assemble transcripts, estimate abundances, and tests for differential expression and regulation in RNA-Seq samples."],
    id: ["BitSeq", "DesSeq", "Cufflinks"]
  }
  public q021 = {
    name: "q021",
    title: "Select the best description of the desired tool's functionality.",
    choices: ["Extraction and annotation of biologically important transcripts.", "Visualization and analysis of mapped sequences.", "Quantification of single-ended or paired-ended RNA-Sequencing data."],
    id: ["RNAeXpress", "SeqMonk", "RSEM"]
  }
  public q022 = {
    name: "q022",
    title: "Select the best description of the desired tool's functionality.",
    choices: ["It is a read mapper.", "Mapping low-divergent sequences against a larger genome i.e. the human genome.", "Identify regions of similarity by comparison of nucleotide or protein sequences."],
    id: ["Bowtie", "BWA", "BLAST"]
  }
  public q0010 = {
    name: "q0011",
    title: "What sequencing platform are you using?",
    choices: ["Illumina", "Thermo Fisher Scientific", "Oxford Nanopore", "Roche/454 Life Sciences"],
    id: ["Alta-cyclic", "FlowgramFixer", "DeepNano", "PyroBayes"]
  }
  public q0011 = {
    name: "q0011",
    title: "What would you like to do?",
    choices: ["View overview of problems.", "Apply adapter trimming.", "Conduct data manipulation.", "Generate workflow."],
    id: ["FastQC", "TrimGalore", "SMART", "clcgenomicsworkbench"]
  }
  
  public changeQuestion = (index, name, isnone) =>{
    this.questionNumber++
    if(isnone){
      window.location.href = "/not-available-yet"
    }
    else if(this[String(name+index)] == null){
      this.router.navigate(['/tool', this[name].id[index]])
    }
    else{
      this.question = this[String(name+index)]
    }
  }
  
  public previousQuestion = (current) =>{
    this.questionNumber--
    if(current.name.slice(0,-1).length == 1){
      window.location.href = "/home"
    }
    else{
      this.question = this[current.name.slice(0,-1)]
    }
  }

  questionNumber: number
  question: any
  fadeDiv: any
  constructor(private router: Router){}

  ngOnInit() {
    this.question = this.q0
    this.questionNumber = 1
    
  }

}
