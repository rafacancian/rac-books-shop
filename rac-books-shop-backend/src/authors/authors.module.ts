import { Module } from '@nestjs/common';
import { AuthorsService } from './services/authors.service';
import { AuthorsResolver } from './resolvers/authors.resolver';

@Module({
  providers: [AuthorsService, AuthorsResolver],
  exports: [AuthorsService],
})
export class AuthorsModule {}
