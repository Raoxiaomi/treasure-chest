import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestUser {
  @PrimaryGeneratedColumn()
  id: number;
}
