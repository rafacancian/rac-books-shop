import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Option } from './options.model';

@ObjectType()
export class Book {
  
  @Field((type) => Int)
  id: number;
  
  @Field((type) => Int)
  category: number;
  
  @Field((type) => String)
  title: string;
  
  @Field((type) => String)
  slug: string;
  
  @Field((type) => String)
  description: string;
  
  @Field((type) => String)
  isbn: string;
  
  @Field((type) => Number)
  pageNumber: number;
  
  @Field((type) => String)
  publication: string;
  
  @Field((type) => String)
  image: string;
  
  @Field((type) => Int)
  author: number;

  @Field((type) => Boolean)
  release: boolean;

  @Field((type) => Boolean)
  bestseller: boolean;

  @Field((type) => [Option])
  options: Option[];

  @Field((type)=> String)
  about: string;
}
