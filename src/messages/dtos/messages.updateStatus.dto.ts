import { IsNotEmpty, IsString } from 'class-validator';

export class MessagesUpdateStatus {
  @IsString()
  @IsNotEmpty()
  status: string;
}
