import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent {
  cv:string;

  constructor(private route:ActivatedRoute) {
   this.route.params.subscribe(params => { this.cv = params['cv'];});
}

  ngAfterViewInit() {
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    
    viewer.addDefaultPanels();
    
    viewer.open("http://127.0.0.1:8887/" + this.cv);
    console.log(this.cv);
  }

}
