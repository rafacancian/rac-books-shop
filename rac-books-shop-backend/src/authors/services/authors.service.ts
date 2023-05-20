import { Injectable } from '@nestjs/common';
import { http } from 'src/common/http';
import { Author } from '../models/author.model';

@Injectable()
export class AuthorsService {

  async getAll() {
    const response = await http.get<Author[]>('/authors');
    return response.data;
  }
  
  async getById(id: number) {
    console.log("Author getById " + id)
    const response = await http.get<Author>(`/authors/${id}`);
    return response.data;
  }
}
