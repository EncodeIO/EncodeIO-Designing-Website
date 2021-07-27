import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

 @Component({
    //moduleId: module.id,
    selector: 'result-page',
    templateUrl: './result.html',
})

export class ResultComponent implements OnInit  {
  
  constructor(
    private router: Router
  ) {}
  
  ngOnInit(): void {


  }
  
}