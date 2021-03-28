import { Injectable } from '@nestjs/common';
import { resolve } from 'node:path';
import * as MOCKED_DATA from './data/sample-data.json'

@Injectable()
export class AppService {
  getAnalyticsData(): Promise<any> {
    return new Promise((resolve, reject)=>{
      Object.keys(MOCKED_DATA.length > 0)? resolve(MOCKED_DATA): reject()
    })
  }
}
