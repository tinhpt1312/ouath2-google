import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { GoogleStrategy } from './strategy/google.strategy';
import { User } from 'src/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/user/user.module';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    TypeOrmModule.forFeature([User]),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [GoogleStrategy, UserService],
  exports: [TypeOrmModule],
})
export class AuthModule {}
