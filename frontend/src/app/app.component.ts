import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {IInstitution} from './interfaces/institution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oss-github-benchmark';
  data: IInstitution[];

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.dataService.loadData().subscribe( ({jsonData}) => {
      this.data = jsonData;
    });
  }
}
