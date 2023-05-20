import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Args,
  Int,
} from '@nestjs/graphql';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';
import { Author } from 'src/authors/models/author.model';
import { AuthorsService } from 'src/authors/services/authors.service';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
  ) {}

  @Query((returns) => [Book])
  async books(
    @Args('title', { type: () => String, nullable: true }) title: string,
    @Args('categoryId', { type: () => Int, nullable: true })
    categoryId: number,
  ): Promise<Book[]> {
    return this.booksService.getAll(title, categoryId);
  }

  @Query((returns) => Book)
  async book(
    @Args('slug', { type: () => String, nullable: false }) slug: string,
  ): Promise<Book> {
    return this.booksService.getBySlug(slug);
  }

  @ResolveField('author', (returns) => Author)
  async author(@Parent() book: Book): Promise<Author> {
    const { author } = book;
    return this.authorsService.getById(author);
  }
}
