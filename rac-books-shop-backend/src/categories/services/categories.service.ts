import { Injectable } from '@nestjs/common';
import { http } from 'src/common/http';

@Injectable()
export class CategoriesService {
  async getAll() {
    const response = await http.get('/categories');
    return response.data;
  }
  async getById(id: number) {
    const response = await http.get(`/categories/${id}`);
    return response.data;
  }
}
