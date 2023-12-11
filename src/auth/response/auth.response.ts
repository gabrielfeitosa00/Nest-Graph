import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class AuthReponse {
  @Field()
  token: string;
}
