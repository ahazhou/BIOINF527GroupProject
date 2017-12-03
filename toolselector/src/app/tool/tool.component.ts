import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  toolname: string
  constructor(private route: ActivatedRoute) {
    this.toolname = route.snapshot.params['id'];
  }
  

  ngOnInit() {
    
  }

}
