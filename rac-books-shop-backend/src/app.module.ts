import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CategoriesModule } from './categories/categories.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { ShoppingCart } from './shoppingcart/models/shoppingcart.model';
import { ShoppingCartModule } from './shoppingcart/shoppingcart.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: 'http://localhost:3000',
        credentials: false,
      },
    }),
    CategoriesModule,
    AuthorsModule,
    BooksModule,
    ShoppingCartModule
  ],
})
export class AppModule {}
