
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent {
  date:Date;
  constructor(
    public dialogRef: MatDialogRef<InterviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { dialogRef.beforeClosed().subscribe(() => dialogRef.close(this.date));}
  
  onCancel(): void {
    this.dialogRef.close();
  }
}
