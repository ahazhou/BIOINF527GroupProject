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
  tooldescription: string
  tooldisplayname: string
  toolpic: string
  toollink: string

  public tools:Map<string, Array<string>> = new Map([["Proper", ["Proper", "PROPER, or PROspective Power Evaluation for RNAseq, is a freely available R package for power assessment and sample size determination for RNA-seq. PROPER includes two components: (i) a semi-parametric simulation that generates data based on actual RNA-seq experiments with flexible choices on baseline expressions, biological variations and patterns of DE; and (ii) a power assessment component that provides a comprehensive view of power.", "https://www.bioconductor.org/packages/release/bioc/html/PROPER.html", "img"]], 
  	["AnalyzeReplication", ["AnalyzeReplication", "AnalyzeReplication: A low-cost metric for guiding the design of large-scale RNA-seq Differential Expression (DE) studies. AnalyzeReplication is able to improve a single target: power to detect DE genes between samples.", "http://home.uchicago.edu/~jiezhou/replication/", "img"]],
  	["RNAtor", ["RNAtor", "RNAtor: A biologist-friendly and easy-to-use Android platform to design RNA-seq experiments based on certain user inputs. Where sample is limiting, RNAtor provides guidelines to produce required number of reads to detect differentially expressed transcripts. The recommendations provided by RNAtor are based on an exhaustive combination of simulation studies and validation with real RNA-seq datasets. RNAtor is available on the Google Play Store.", "https://github.com/binaypanda/RNAtor", "img"]],
  	["BwB", ["BwB", "BwB, or BioDepot-workflow-Builder, provides a user-friendly, modular and open-source graphical user interface (GUI) to create bioinformatics workflows. As an additional feature, the GUI is also wrapped inside a Docker container and can be accessed through most major web browsers. The use of software containers ensures that workflows will give identical results across different operating systems and hardware architectures. The use of Docker also allows for individual components to be deployed on the cloud. The modularity and ease of customization and installation of bioinformatics tools using BwB allows for researchers to efficiently test new workflows and compare competing algorithms. This means that the only requirement for creating and running BioDepot workflows is to install Docker. BwB can be used to build different workflows by combining interchangeable and encapsulated widgets, allowing researchers to easily test alternative algorithms and observe how the outputs differ.", "https://github.com/BioDepot/BioDepot-workflow-builder", "img"]],
  	["Alta-cyclic", ["Alta-cyclic", "Alta-cyclic: An Illumina Genome-Analyzer (Solexa) base caller. Alta-Cyclic uses machine learning to compensate for noise factors. Alta-Cyclic substantially improved the number of accurate reads for sequencing runs up to 78 bases and reduced systematic biases, facilitating confident identification of sequence variants. Alta-Cyclic has several notable differences from the standard Illumina base caller that should improve read accuracy. First, all the calling parameters are optimized empirically and tested to enhance the accuracy of the base calling for each run, whereas in the Illumina base caller parameters are statically derived, though in a sophisticated manner, and are not evaluated. Second, Alta-Cyclic calculates phasing parameters based on a parametric model using data from the latest cycles, whereas the Illumina base caller relies on a numerical method and data from early cycles. Finally, Alta-Cyclic dynamically tracks changes in fluorophore cross-talk, which severely disrupts signals in later cycles, whereas the Illumina base caller statically determines cross-talk based on values from early cycles.", "http://hannonlab.cshl.edu/Alta-Cyclic/main.html", "img"]],
  	["FlowgramFixer", ["FlowgramFixer", "FlowgramFixer: FlowgramFixer is an freely available,  improved basecaller for the IonTorrent sequencing platform, which reduces error rates, and generates more uniquely aligned reads and more high quality reads than the default base calling algorithm implemented by IonTorrent in TorrentSuite. FlowgramFixer is also applicable to others flowgram-based sequencing platform.", "https://academic.oup.com/bioinformatics/article/29/13/i344/188472#xref-corresp-1-1", "img"]],
  	["DeepNano", ["DeepNano", "DeepNano: Provides a more accurate and computationally efficient alternative to the Hidden Markov-Model (HMM)-based methods used in the Metrichor base caller by the device manufacturer. DeepNano is a new tool for base calling MinION sequencing data. The MinION device is currently the smallest high-throughput DNA sequencer.", "src", "img"]],
  	["PyroBayes", ["PyroBayes", "A base caller for pyrosequences from the 454 Life Sciences sequencing machines. PyroBayes was designed to assign more accurate base quality estimates to the 454 pyrosequences.", "src", "img"]],
  	["FastQC", ["FastQC", "desc", "src", "img"]],
  	["TrimGalore", ["TrimGalore!", "desc", "src", "img"]],
  	["SMART", ["S-MART", "desc", "src", "img"]],
  	["clcgenomicsworkbench", ["CLC Genomics Workbench", "desc", "src", "img"]],
  	["BitSeq", ["BitSeq", "There are two stages in BitSeq analysis. The first stage is expression estimation and the second is differential expression estimation. The first stage involves using Bayesian inference to infer expression of each transcript from each RNA-seq experiment. The goal of the second stage is to choose transcripts with the greatest probability of differential expression.", "http://bioconductor.org/packages/release/bioc/html/BitSeq.html", "img"]],
  	["DesSeq", ["DesSeq", "desc", "src", "img"]],
  	["Cufflinks", ["Cufflinks", "desc", "src", "img"]],
  	["RNAeXpress", ["RNAeXpress", "desc", "src", "img"]],
  	["SeqMonk", ["SeqMonk", "desc", "src", "img"]],
  	["RSEM", ["RSEM", "desc", "src", "img"]],
  	["Bowtie", ["Bowtie", "desc", "src", "img"]],
  	["BWA", ["BWA", "desc", "src", "img"]],
  	["BLAST", ["BLAST", "desc", "src", "img"]],
  	["AStalavista", ["AStalavista", "AStalavista (alternative splicing transcriptional landscape visualization tool) dynamically identifies, extracts, and displays alternative splicing events from whole genome annotations and user provided gene sets. It supports alternative transcriptional landscape visualization. In addition, the tool remains applicable even if sequencing/annotation has not been completed.", "https://bioinformatics.ca/links_directory/tool/9250/astalavista", "img"]],
  	["AltAnalyze", ["AltAnalyze", "AltAnalyze can assess alternative exon expression along protein isoforms, domain composition, and microRNA targeting. Is can also provide various methods for the analysis of other data, like RNA summarization, annotation, and clustering. In addition, it can serve as an application for microarray, RNA-seq, and metabolomics analysis.", "http://www.altanalyze.org", "img"]],
  	["spliceR", ["spliceR", "spliceR is an R package for classification of alternative splicing and prediction of coding potential. The tool is able to detect coding potential of transcripts, determine untranslated region and open reading frame lengths, and predict whether transcripts are nonsense mediated decay-sensitive based on compatible annotated start codon positions and their downstream open reading frame.", "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-15-81", "img"]],
  	["maSigPro", ["maSigPro", "maSigPro is an R package that uses a regression based approach to find genes for which there are significant gene expression profile differences between experimental groups in time course microarray and RNA-seq experiments. It also allows for the analysis of multiple time course transcriptomics data.", "img"]],
  	["diffsplicing", ["diffsplicing", "diffsplicing is an R package that tests for differential exon usage for each gene. Ir models expression levels in three different settings: overall gene expression level, absolute transcript expression level and relative transcript expression level expressed as a proportion of all transcripts for the same gene. In addition, it ranks the genes and transcripts according to the temporal change they show in their expression levels.", "http://web.mit.edu/~r/current/arch/i386_linux26/lib/R/library/limma/html/diffSplice.html", "img"]],
  	["timeSeq", ["timeSeq", "imeSeq is an R package for nonparallel differential expression genes and parallel differential expression genes detection. The tool uses a binomial mixed-effect model. In addition, is includes a parallel computing option to speed up the computing process.", "https://www.rdocumentation.org/packages/timeSeq/versions/1.0.3/topics/timeSeq", "img"]],
  	["LIONS", ["LIONS", "LIONS is an analysis pipeline which is used to annotates a paired-end RNAseq library to detect transposable element transcripts. It quantifies the contribution of transposable element promoters to the transcriptome from the RNA seq data.", "https://www.biorxiv.org/content/early/2017/06/13/149864", "img"]],
  	["TEtools", ["TEtools", "TEtools is used for the analysis of transposable element expression. It works by taking into account the transposable element sequence diversity of the genome, and can be applied to the unannotated or unassembled genome. It also performs mapping of RNA-seq data from classical mRNAs or small RNAs onto a list of transposable element sequences.", "https://academic.oup.com/nar/article/45/4/e17/2290912", "img"]],
  	["RepEnrich", ["RepEnrich", "RepEnrich is a computational method used to study genome-wide transcriptional regulation of repetitive elements, like transposable elements. It also supports custom repetitive element or repeat feature annotation in bed format.", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4757950", "img"]]]);

  constructor(private route: ActivatedRoute) {
    this.toolname = route.snapshot.params['id'];
    if(this.toolname == "Proper"){
    	this.tooldescription = this.tools.get(this.toolname)[1];
    	this.tooldisplayname = this.tools.get(this.toolname)[0];
    	this.toolpic = this.tools.get(this.toolname)[3];
    	this.toollink = this.tools.get(this.toolname)[2];
    }
}
  

  ngOnInit() {
    
  }

}
