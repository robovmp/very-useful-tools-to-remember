import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateToolBody {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  link: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  tags: string[];
}
