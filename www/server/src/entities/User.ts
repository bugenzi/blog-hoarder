import { Entity, Property, PrimaryKey } from "mikro-orm";
import { ObjectType, Field } from "type-graphql";

ObjectType();
@Entity({ tableName: "Users" })
export default class User {
  @Field()
  @PrimaryKey()
  id!: number;

  // @Field()
  // @Property({ type: "date" })
  // createdAt: Date = new Date();

  // @Field()
  // @Property({ type: "date", onUpdate: () => new Date() })
  // updatedAt: Date = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  password!: string;
}
