export class MessagesEntity {
  id: string;
  name: string;
  description: string;
  to: string;
  status: string;
  date: Date;

  constructor(
    id: string,
    name: string,
    desc: string,
    to: string,
    status: string,
    date: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.to = to;
    this.status = status;
    this.date = date;
  }
}
