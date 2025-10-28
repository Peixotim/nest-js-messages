import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
export class MessagesEntity {
  @PrimaryGeneratedColumn('uuid') //Definir o auto-generate como uuid
  id: string;
  @Column()
  name: string;
  description: string;
  to: string;
  from: string;
  status: string;
  date: Date;

  constructor(
    id: string,
    name: string,
    desc: string,
    to: string,
    from: string,
    status: string,
    date: Date,
  ) {
    this.from = from;
    this.id = id;
    this.name = name;
    this.description = desc;
    this.to = to;
    this.status = status;
    this.date = date;
  }
}
