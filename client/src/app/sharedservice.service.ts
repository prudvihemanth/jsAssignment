import { Injectable } from '@angular/core';

@Injectable()
export class SharedserviceService {
  
  public data;

  constructor() { }
  
  // this function shares data between two components 
  recievedata(obj){
    this.data = obj
  }
}
