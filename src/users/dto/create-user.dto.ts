import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Vlad' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'Vlad123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'vlad@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
