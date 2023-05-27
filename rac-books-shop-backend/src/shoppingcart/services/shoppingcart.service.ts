import { Injectable } from '@nestjs/common';
import { http } from 'src/common/http';
import { ShoppingCart } from '../models/shoppingcart.model';
import { ShoppingCartItemInput } from '../resolvers/shoppingcart.resolver';
import { BooksService } from 'src/books/services/books.service';

@Injectable()
export class ShoppingCartService {

  constructor(private booksService: BooksService) {}

  async getShoppingCart() {
    const { data: shoppingCart } = await http.get<ShoppingCart>('/shoppingcart/1');
    if (!shoppingCart.itens) {
      shoppingCart.itens = [];
    }
    return shoppingCart;
  }

  async find() {
    const shoppingCart = await this.getShoppingCart();
    await Promise.all(
      shoppingCart.itens.map(async (item) => {
        item.book = await this.booksService.getById(item.bookId);
        const opcao = item.book.options.find(
          (op) => op.id == item.optionId,
        );
        item.option = opcao;
      }),
    );
    shoppingCart.total = 0;
    if (shoppingCart.itens) {
      shoppingCart.total = shoppingCart.itens.reduce((acumulado, item) => {
        return acumulado + item.quantity * item.option.price;
      }, 0);
    }
    return shoppingCart;
  }

  async add(item: ShoppingCartItemInput) {
    const shoppingCart = await this.getShoppingCart();
    if (!Number.isInteger(item.quantity)) {
      item.quantity = 1;
    }

    const itemFound = shoppingCart.itens.find(
      (it) =>
        it.bookId == item.bookId && it.optionId == item.optionId,
    );
    if (itemFound) {
      itemFound.quantity = item.quantity;
    } else {
      shoppingCart.itens.push({
        ...item,
        quantity: item.quantity,
      });
    }
    await http.put('shoppingcart/1', shoppingCart);
  }

  async remove(item: ShoppingCartItemInput) {
    const shoppingCart = await this.find();
    const idx = shoppingCart.itens.findIndex(
      (it) =>
        it.bookId == item.bookId && it.optionId == item.optionId,
    );
    if (idx >= 0) {
      shoppingCart.itens.splice(idx, 1);
      await http.put('shoppingcart/1', shoppingCart);
    }
  }
}
