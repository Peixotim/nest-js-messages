import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('messages')
export class MessagesEntity {
  @PrimaryGeneratedColumn('uuid') //Definir o auto-generate como uuid
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  description: string;
  @Column({ type: 'varchar', length: 50 })
  to: string;
  @Column({ type: 'varchar', length: 50 })
  from: string;
  @Column({ type: 'varchar', length: 50 })
  status: string;
  @CreateDateColumn()
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
