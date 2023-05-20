import {
  Resolver,
  Query,
} from '@nestjs/graphql';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../models/author.model';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query((returns) => [Author])
  async authors(): Promise<Author[]> {
    return this.authorsService.getAll();
  }
}
