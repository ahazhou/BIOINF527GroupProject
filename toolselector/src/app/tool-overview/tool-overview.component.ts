import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-overview',
  templateUrl: './tool-overview.component.html',
  styleUrls: ['./tool-overview.component.css']
})
export class ToolOverviewComponent implements OnInit {

	toolnames = ["Proper", "AnalyzeReplication", "RNAtor", "BioDepot-workflow-Builder (BwB)", "Alta-cyclic", "FlowgramFixer", "DeepNano", "PyroBayes", "FastQC", 
	"TrimGalore!", "S-MART", "CLC Genomics Workbench", "BitSeq", "DesSeq", "Cufflinks", "RNAeXpress", "SeqMonk", "RSEM", "Bowtie", "Burrows-Wheeler Aligner (BWA)", 
	"BLAST", "AStalavista", "AltAnalyze", "spliceR", "maSigPro", "diffsplicing", "timeSeq", "LIONS", "TEtools", "RepEnrich"];

  idnames = ["Proper", "AnalyzeReplication", "RNAtor", "BwB", "Alta-cyclic", "FlowgramFixer", "DeepNano", "PyroBayes", "FastQC", 
	"TrimGalore", "SMART", "clcgenomicsworkbench", "BitSeq", "DesSeq", "Cufflinks", "RNAeXpress", "SeqMonk", "RSEM", "Bowtie", "BWA", 
  "BLAST", "AStalavista", "AltAnalyze", "spliceR", "maSigPro", "diffsplicing", "timeSeq", "LIONS", "TEtools", "RepEnrich"];
  
  sources = ["https://www.bioconductor.org/packages/release/bioc/html/PROPER.html","http://home.uchicago.edu/~jiezhou/replication/",
            "https://github.com/binaypanda/RNAtor", "https://github.com/BioDepot/BioDepot-workflow-builder",
            "http://hannonlab.cshl.edu/Alta-Cyclic/main.html", "https://academic.oup.com/bioinformatics/article/29/13/i344/188472#xref-corresp-1-1",
            "http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0178751", "https://github.com/alces-software/packager-base/tree/master/ext/pyrobayes",
            "https://www.bioinformatics.babraham.ac.uk/projects/fastqc/", "https://github.com/FelixKrueger/TrimGalore",
            "https://urgi.versailles.inra.fr/Tools/S-Mart", "https://www.qiagenbioinformatics.com/products/clc-genomics-workbench/",
            "http://bioconductor.org/packages/release/bioc/html/BitSeq.html", "http://bioconductor.org/packages/release/bioc/html/DESeq2.html",
            "http://cole-trapnell-lab.github.io/cufflinks/", "https://rnaexpress.erc.monash.edu.au/",
            "https://www.bioinformatics.babraham.ac.uk/projects/seqmonk/Help/1%20Introduction/1.1%20What%20is%20SeqMonk.html", "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-323",
            "http://bowtie-bio.sourceforge.net/index.shtml", "http://bio-bwa.sourceforge.net/",
            "https://blast.ncbi.nlm.nih.gov/Blast.cgi", "https://bioinformatics.ca/links_directory/tool/9250/astalavista",
            "http://www.altanalyze.org", "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-15-81",
            "https://bioconductor.org/packages/release/bioc/html/maSigPro.html", "http://web.mit.edu/~r/current/arch/i386_linux26/lib/R/library/limma/html/diffSplice.html",
            "https://www.rdocumentation.org/packages/timeSeq/versions/1.0.3/topics/timeSeq", "https://www.biorxiv.org/content/early/2017/06/13/149864",
            "https://academic.oup.com/nar/article/45/4/e17/2290912", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4757950"];

constructor() { }
  
  ngOnInit() {
  }

}
