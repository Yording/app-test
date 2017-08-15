import { Injectable, Optional } from '@angular/core';

@Injectable()
export class ConfigService {
  
  public options:object

  constructor(@Optional() config: object) {
    if (config) { this.options = config }
  }

}
