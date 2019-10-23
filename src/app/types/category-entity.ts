import 'reflect-metadata';
import { jsonObject, jsonMember } from 'typedjson';

@jsonObject
export class CategoryEntity {

  @jsonMember({ constructor: String })
  name: string;

}
