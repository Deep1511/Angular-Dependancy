import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1:string[]=["deep",'E234','d@gmail.com']
  info2:string[]=["mahi",'E235','m@gmail.com']
  info3:string[]=["shivu",'E236','s@gmail.com']

  getinfo1():string[]{
    return this.info1;
  }

  getinfo2():string[]{
    return this.info2;
  }

  getinfo3():string[]{
    return this.info3;
  }
  constructor() { }
}
