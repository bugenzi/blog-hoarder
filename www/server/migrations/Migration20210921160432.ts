import { Migration } from '@mikro-orm/migrations';

export class Migration20210921160432 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Users" ("id" serial primary key, "username" text not null, "password" text not null);');
    this.addSql('alter table "Users" add constraint "Users_username_unique" unique ("username");');
  }

}
