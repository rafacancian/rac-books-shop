import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';
import { ShoppingCart } from '../models/shoppingcart.model';
import { ShoppingCartService } from '../services/shoppingcart.service';

@InputType()
export class ShoppingCartItemInput {

  @Field()
  bookId: number;

  @Field()
  optionId: number;

  @Field({ nullable: true })
  quantity?: number;
}

@Resolver((of) => ShoppingCart)
export class ShoppingCartResolver {

  constructor(private shoppingCartService: ShoppingCartService) { }

  @Query((returns) => ShoppingCart)
  async shoppingCart(): Promise<ShoppingCart> {
    return this.shoppingCartService.find();
  }

  @Mutation((returns) => Boolean)
  async adicionarItem(@Args('item') item: ShoppingCartItemInput) {
    await this.shoppingCartService.add(item);
    return true;
  }

  @Mutation((returns) => Boolean)
  async removerItem(@Args('item') item: ShoppingCartItemInput) {
    await this.shoppingCartService.remove(item);
    return true;
  }
}
