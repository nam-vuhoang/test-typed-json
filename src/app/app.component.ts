import { Component } from '@angular/core';

import { TypedJSON } from 'typedjson';
import { CategoryEntity } from './types/category-entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello, TypedJSON';

  category: CategoryEntity;

  constructor() {
    this.category = new TypedJSON(CategoryEntity).parse('{"name": "foo"}');
  }


}
