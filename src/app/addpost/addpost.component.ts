import { Component, OnInit } from '@angular/core';
import { PostserService } from '../postser.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  mydata;
  getd;
  checkCurrentLesson2;
  constructor(private ps: PostserService) { }
  submit(ti, imga, cona) {
    if (ti && imga && cona !== undefined) {
      this.ps.postdata(ti, imga, cona).subscribe(x => {
        this.mydata = x;
        console.log(this.mydata)
        alert("You Sucessfully Entered The Data")
        this.addinf()
      })
    }
    else {
      alert("Enter The Information")
    }

  }
  addinf() {
    this.ps.getdata().subscribe(x => {
      this.getd = x;
      console.log(this.getd)
    })
  }
  ngOnInit() {
    this.addinf()
  }
}
