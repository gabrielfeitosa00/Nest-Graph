import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const userToUpdate = await this.userRepository.findOne({ where: { id } });
    const updatedUser = this.userRepository.create(updateUserInput);
    const userResult = this.userRepository.merge(userToUpdate, updatedUser);
    return this.userRepository.save(userResult);
  }

  async remove(id: string) {
    const userToDelete = await this.userRepository.findOne({ where: { id } });
    return this.userRepository.remove(userToDelete);
  }
}
