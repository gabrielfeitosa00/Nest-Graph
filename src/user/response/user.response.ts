import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  name: string;
}
