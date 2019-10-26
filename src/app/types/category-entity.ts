import { jsonObject, jsonMember } from 'typedjson';

@jsonObject
export class CategoryEntity {

  @jsonMember
  name: string;

}
