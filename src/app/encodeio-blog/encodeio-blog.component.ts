import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'encodeio-blog',
  templateUrl: './encodeio-blog.component.html',
  styleUrls: ['./encodeio-blog.component.css']
})
export class EncodeioBlogComponent implements OnInit {

  totalLength: any;
  page: number = 1;
  blogData: any;

  constructor() 
  { 
    this.blogData = new Array<any>("name","ankush", "shivani", "test", "shanky", "bruno", "sam", "leo");
    console.log(this.blogData);
  }

  ngOnInit(): void {

    this.totalLength = 7;
    
  }

}
