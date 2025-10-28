import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class MessagesRequest {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  status: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  date: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    to: string,
    from: string,
    status: string,
    date: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.to = to;
    this.from = from;
    this.status = status;
    this.date = date;
  }
}
