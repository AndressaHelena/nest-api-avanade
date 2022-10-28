import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumberString,
} from 'class-validator';

export class CreateProductDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumberString()
    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNumberString()
    @MaxLength(7)
    @IsNotEmpty()
    categoryId: number;
}
