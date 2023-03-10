import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  name: string;
}
