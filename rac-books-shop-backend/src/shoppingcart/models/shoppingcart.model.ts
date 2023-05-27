import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ShoppingCartItem } from './shoppingcart-item.model';

@ObjectType()
export class ShoppingCart {

  @Field((tpye) => Number)
  id: number;

  @Field((type) => Number)
  total: number;

  @Field((type) => [ShoppingCartItem])
  itens: ShoppingCartItem[];
}
