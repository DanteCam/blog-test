import {
  Filter,

  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, post,






  requestBody
} from '@loopback/rest';
import {Posts} from '../models';
import {PostsRepository} from '../repositories';

export class PostController {
  constructor(
    @repository(PostsRepository)
    public postsRepository: PostsRepository,
  ) { }

  @post('/posts', {
    responses: {
      '200': {
        description: 'Posts model instance',
        content: {'application/json': {schema: getModelSchemaRef(Posts)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {
            title: 'NewPosts',

          }),
        },
      },
    })
    posts: Posts,
  ): Promise<Posts> {
    return this.postsRepository.create(posts);
  }

  // @get('/posts/count', {
  //   responses: {
  //     '200': {
  //       description: 'Posts model count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async count(
  //   @param.where(Posts) where?: Where<Posts>,
  // ): Promise<Count> {
  //   return this.postsRepository.count(where);
  // }

  @get('/posts', {
    responses: {
      '200': {
        description: 'Array of Posts model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Posts, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Posts) filter?: Filter<Posts>,
  ): Promise<Posts[]> {
    return this.postsRepository.find(filter);
  }

  // @patch('/posts', {
  //   responses: {
  //     '200': {
  //       description: 'Posts PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Posts, {partial: true}),
  //       },
  //     },
  //   })
  //   posts: Posts,
  //   @param.where(Posts) where?: Where<Posts>,
  // ): Promise<Count> {
  //   return this.postsRepository.updateAll(posts, where);
  // }

  // @get('/posts/{id}', {
  //   responses: {
  //     '200': {
  //       description: 'Posts model instance',
  //       content: {
  //         'application/json': {
  //           schema: getModelSchemaRef(Posts, {includeRelations: true}),
  //         },
  //       },
  //     },
  //   },
  // })
  // async findById(
  //   @param.path.number('id') id: number,
  //   @param.filter(Posts, {exclude: 'where'}) filter?: FilterExcludingWhere<Posts>
  // ): Promise<Posts> {
  //   return this.postsRepository.findById(id, filter);
  // }

  // @patch('/posts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Posts PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Posts, {partial: true}),
  //       },
  //     },
  //   })
  //   posts: Posts,
  // ): Promise<void> {
  //   await this.postsRepository.updateById(id, posts);
  // }

  // @put('/posts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Posts PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() posts: Posts,
  // ): Promise<void> {
  //   await this.postsRepository.replaceById(id, posts);
  // }

  // @del('/posts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Posts DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.postsRepository.deleteById(id);
  // }
}
