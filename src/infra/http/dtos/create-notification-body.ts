import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificantionBody {
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}
