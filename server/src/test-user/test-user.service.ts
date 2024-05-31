import { Injectable } from '@nestjs/common';
import { CreateTestUserDto } from './dto/create-test-user.dto';
import { UpdateTestUserDto } from './dto/update-test-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TestUser } from './entities/test-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestUserService {
  constructor(
    @InjectRepository(TestUser)
    private readonly repository: Repository<TestUser>,
  ) {}

  create(createTestUserDto: CreateTestUserDto) {
    return this.repository.save(new TestUser());
    // return 'This action adds a new testUser';
  }

  findAll() {
    return `This action returns all testUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testUser`;
  }

  update(id: number, updateTestUserDto: UpdateTestUserDto) {
    return `This action updates a #${id} testUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} testUser`;
  }
}
