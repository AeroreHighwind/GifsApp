import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apikey:string = 'allI7PH29OZfZAILH2hVRDED7HCJMZl1'

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string [] =[];

  constructor(private http:HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=> oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);

  }


  searchTag (tag:string){
    if(tag.length === 0) return;
    this.organizeHistory(tag)

    this.http.get(apikey).subscribe( resp =>{
      console.log(resp)
    })
  }
}
