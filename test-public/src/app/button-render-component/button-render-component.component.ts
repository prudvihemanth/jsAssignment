import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  template: `
  <button (click)="editdelete()">Edit</button>
`,
  selector: 'app-button-render-component',
  styleUrls: ['./button-render-component.component.css']
})


export class ButtonRenderComponentComponent implements ViewCell, OnInit {

  @Input() value;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editdelete() {
    this.save.emit(this.rowData);
  }

}
