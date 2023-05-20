import { Module } from '@nestjs/common';

import { BooksResolver } from './resolvers/books.resolver';
import { BooksService } from './services/books.service';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  providers: [BooksService, BooksResolver],
  exports: [BooksService],
  imports: [AuthorsModule],
})
export class BooksModule {}
