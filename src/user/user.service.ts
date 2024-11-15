import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOrCreateUser(userData: {
    googleId: string;
    name: string;
    email: string;
    avatar: string;
  }) {
    let user = await this.userRepository.findOne({
      where: { googleId: userData.googleId },
    });
    if (!user) {
      user = this.userRepository.create(userData);
      await this.userRepository.save(user);
    }
    return user;
  }
}
