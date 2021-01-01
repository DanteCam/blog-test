import {DefaultCrudRepository} from '@loopback/repository';
import {Posts, PostsRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostsRepository extends DefaultCrudRepository<
  Posts,
  typeof Posts.prototype.id,
  PostsRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Posts, dataSource);
  }
}
