import { PartialType } from '@nestjs/mapped-types';
import { CreateTestUserDto } from './create-test-user.dto';

export class UpdateTestUserDto extends PartialType(CreateTestUserDto) {}
