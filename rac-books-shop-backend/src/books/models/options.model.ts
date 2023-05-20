import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Option {

  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  title: string;

  @Field((type) => Number)
  price: number;

  @Field((type) => [String], { nullable: true })
  formats?: string[];
}
