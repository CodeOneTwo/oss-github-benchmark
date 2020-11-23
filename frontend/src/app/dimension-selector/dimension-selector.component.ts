import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dimension-selector',
  templateUrl: './dimension-selector.component.html',
  styleUrls: ['./dimension-selector.component.scss']
})
export class DimensionSelectorComponent implements OnInit {

  @Input() data;
  @Input() options;

  @Output() optionsChange = new EventEmitter();
  dimensionOptions;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.dimensionOptions.subscribe( ops => this.dimensionOptions = ops);
  }
  ngOnChanges() {
  }

}
