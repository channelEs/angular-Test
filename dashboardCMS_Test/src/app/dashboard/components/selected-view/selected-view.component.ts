import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-view',
  templateUrl: './selected-view.component.html',
  styleUrls: ['./selected-view.component.scss']
})
export class SelectedViewComponent implements OnInit {
  title: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      this.title = param.get('title')!
    })
    
    //get('title')!
  }

}
