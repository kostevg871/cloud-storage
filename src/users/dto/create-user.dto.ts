import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test@test.ru' })
  email: string;
  @ApiProperty({ default: 'Test testovich' })
  fullName: string;
  @ApiProperty({ default: '1234test' })
  password: string;
}
