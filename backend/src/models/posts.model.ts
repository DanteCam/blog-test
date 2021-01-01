import {Entity, model, property} from '@loopback/repository';

@model()
export class Posts extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  dateTime: string;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'string',
    required: true,
  })
  post: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;


  constructor(data?: Partial<Posts>) {
    super(data);
  }
}

export interface PostsRelations {
  // describe navigational properties here
}

export type PostsWithRelations = Posts & PostsRelations;
