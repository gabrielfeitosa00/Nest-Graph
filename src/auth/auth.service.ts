import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(loginInput: LoginInput) {
    const user = await this.userService.findOneByEmail(loginInput.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    if (user.password !== loginInput.password) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = this.generateToken(user.id);
    return { token };
  }

  generateToken(userId: string) {
    const payload = { userId };
    return this.jwtService.sign(payload);
  }
}
