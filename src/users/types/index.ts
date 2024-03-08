import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Vlad' })
  username: string;

  @ApiProperty({ example: 'Vlad123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Vlad',
        password: 'vlad123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Vlad' })
  username: string;

  @ApiProperty({ example: 'vlad@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Vlad' })
  username: string;

  @ApiProperty({
    example: '$2b$10$90H0Hn.6Nx0SbrHQCX2xeeYjq.02nS5VpkIIwFAtDtCHEqHK',
  })
  password: string;

  @ApiProperty({ example: 'vlad@gmail.com' })
  email: string;

  @ApiProperty({ example: '2024-01-17T17:23:33.502Z' })
  updatedAt: string;

  @ApiProperty({ example: '2024-01-17T17:23:33.502Z' })
  createdAt: string;
}
