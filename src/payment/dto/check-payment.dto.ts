import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CheckPaymentDto {
  @ApiProperty({ example: '2d3f229b-000f-5000-8000-1f115aef5052' })
  @IsNotEmpty()
  readonly paymentId: number;
}
