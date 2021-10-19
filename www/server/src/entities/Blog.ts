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
// uniqe true will be set to link,text for plagerism reasons
@ObjectType()
@Entity()
export default class Blog extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  title!: string

  @Field()
  @Column()
  text!: string

  @Field()
  @Column()
  link!: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  imageUrl?: string

  @Field()
  @Column({ type: 'int', default: 0 })
  points!: string

  @Field(() => [String])
  @Column('text', { array: true })
  blogType: string[]

  @Field()
  @Column()
  authorId: number

  @ManyToOne(() => User, (user) => user.blogs, {
    cascade: ['insert', 'update'],
  })
  author: User

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date
}
