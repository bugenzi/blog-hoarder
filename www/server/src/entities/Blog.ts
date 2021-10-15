import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import User from './User'

@ObjectType()
@Entity()
export default class Blog extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ unique: true })
  title!: string

  @Field()
  @Column({ unique: true })
  text!: string

  @Field()
  @Column({ unique: true })
  link!: string

  @Field(() => [String])
  @Column('text', { array: true })
  blogType: string[]

  @Column()
  authorId: number

  @Field(() => String)
  @ManyToOne(() => User, (user) => user.blogs)
  author: User

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date
}
