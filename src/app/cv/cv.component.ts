import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';
import {OnInit} from '@angular/core'
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
  cv:string;
  

  constructor(private route:ActivatedRoute) {
   this.route.params.subscribe(params => { this.cv = params['cv'];});
   
   
}
ngOnInit(): void {
  
 
  if (!localStorage.getItem('reload')) { 
    localStorage.setItem('reload', 'no reload') ;
    location.reload() ;
  } else {
    localStorage.removeItem('reload') ;
    this.aaaa();
  }
  
}
 aaaa() {
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    
    viewer.addDefaultPanels();
    
    viewer.open("http://127.0.0.1:8887/" + this.cv);
    
  }
  

}
