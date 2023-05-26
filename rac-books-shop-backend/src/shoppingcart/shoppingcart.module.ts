import { Module } from '@nestjs/common';
import { BooksModule } from '../books/books.module';
import { ShoppingCartResolver } from './resolvers/shoppingcart.resolver';
import { ShoppingCartService } from './services/shoppingcart.service';

@Module({
  providers: [ShoppingCartService, ShoppingCartResolver],
  imports: [BooksModule],
})

export class ShoppingCartModule {}
