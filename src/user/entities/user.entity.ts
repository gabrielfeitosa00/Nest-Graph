import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column({ length: 500, nullable: false })
  name: string;
  @Field()
  @Column('text', { nullable: false })
  email: string;
  @Field()
  @Column('text', { nullable: false })
  password: string;
}
