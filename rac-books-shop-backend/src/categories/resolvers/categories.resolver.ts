import {
  Resolver,
  Query,
} from '@nestjs/graphql';
import { Category } from '../models/category.model';
import { CategoriesService } from '../services/categories.service';

@Resolver((of) => Category)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Query((returns) => [Category])
  async categories(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }
}
