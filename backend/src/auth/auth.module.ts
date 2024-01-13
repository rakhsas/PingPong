import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './utils/google-strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'google' }),
    ],
    controllers: [AuthController],
    providers: [GoogleStrategy]
})
export class AuthModule {}
