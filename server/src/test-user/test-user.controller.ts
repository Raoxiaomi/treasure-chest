import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestUserService } from './test-user.service';
import { CreateTestUserDto } from './dto/create-test-user.dto';
import { UpdateTestUserDto } from './dto/update-test-user.dto';

@Controller('test-user')
export class TestUserController {
  constructor(private readonly testUserService: TestUserService) {}

  @Post()
  create(@Body() createTestUserDto: CreateTestUserDto) {
    return this.testUserService.create(createTestUserDto);
  }

  @Get()
  findAll() {
    return this.testUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestUserDto: UpdateTestUserDto,
  ) {
    return this.testUserService.update(+id, updateTestUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testUserService.remove(+id);
  }
}
