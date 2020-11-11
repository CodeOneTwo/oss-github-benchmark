import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {IInstitution} from './interfaces/institution';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  loadData(): Observable<IData> {
    return combineLatest(
      this.http.get<any[]>('/assets/oss-github-benchmark.csv'),
      this.http.get<IInstitution[]>('/assets/oss-github-benchmark.json'),
    ).pipe(
      map(([csvData, jsonData]) => ({ csvData, jsonData}))
    );
  }
}

interface IData {
  jsonData: IInstitution[];
  csvData: any[];
}
