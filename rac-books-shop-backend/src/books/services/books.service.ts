import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { http } from 'src/common/http';
import { Book } from '../models/book.model';


@Injectable()
export class BooksService {
 
  async getAll(title?: string, categoryId?: number) {
    console.log("entrou getAllBooks")
    const config: AxiosRequestConfig = {};
    if (categoryId > 0) {
      config.params = {
        category : categoryId,
      };
    }
    const { data: books } = await http.get<Book[]>('/books', config);
    if (title) {
      return books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase()),
      );
    }
    return books;
  }

  async getById(id: number) {
    const response = await http.get<Book>(`/books/${id}`);
    return response.data;
  }

  async getBySlug(slug: string) {
    const response = await http.get<Book[]>(`/books`, {
      params: {
        slug,
      },
    });
    if (response.data.length) {
      return response.data[0];
    }
    return null;
  }
}
