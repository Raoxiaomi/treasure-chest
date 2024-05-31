import { Module } from '@nestjs/common';
import { TestUserService } from './test-user.service';
import { TestUserController } from './test-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestUser } from './entities/test-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser])],
  controllers: [TestUserController],
  providers: [TestUserService],
})
export class TestUserModule {}
