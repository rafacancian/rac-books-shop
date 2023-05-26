import { Field, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/books/models/book.model';
import { Option } from 'src/books/models/options.model';

@ObjectType()
export class ShoppingCartItem {

  @Field((type) => Number)
  bookId: number;

  @Field((type) => Number)
  optionId: number;

  @Field((type) => Number)
  quantity: number;

  @Field((type) => Option)
  option?: Option;

  @Field((type) => Book)
  book?: Book;
}
