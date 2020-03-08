import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostserService {
  apikey = "NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1"
addurl = "https://api.mlab.com/api/1/databases/angularjs/collections/shopping";


  constructor(private http:HttpClient) { }

  postdata(tii,id,conh){
    var postd = {}
    postd['tile'] = tii;
    postd['id']=id;
    postd['infor']=conh

    return this.http.post(`${this.addurl}?apiKey=${this.apikey}`,postd)
  }
  getdata(){
   return this.http.get(`${this.addurl}?apiKey=${this.apikey}`)
  }
}
