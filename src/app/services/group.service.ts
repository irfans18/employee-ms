import { Injectable } from '@angular/core';
import * as groups from '@assets/data/group.json';
import { ICommonResponse } from '@shared/model/common-response';
import { IGroup } from '@shared/model/group';
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  data:ICommonResponse<IGroup[]>;
  constructor() { 
    this.data = groups;
  }
}
