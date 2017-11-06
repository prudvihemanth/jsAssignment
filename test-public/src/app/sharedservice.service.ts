import { Injectable } from '@angular/core';

@Injectable()
export class SharedserviceService {
  
  public data;

  constructor() { }
  
  recievedata(obj){
    this.data = obj
  }
}
