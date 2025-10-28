import { IsString, IsOptional, IsNotEmpty, IsDate } from 'class-validator';
export class MessagesDto {
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
  status: string;

  @IsDate()
  @IsOptional()
  date: Date;
}
