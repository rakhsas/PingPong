import { Controller, Get, UseGuards } from "@nestjs/common";
import { GoogleAuthGuard } from "./utils/Guards";

@Controller('auth')
export class AuthController {
 
    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return {
            msg: 'google Authentication'
        }
    }
    
    @Get('google/callback')
    @UseGuards(GoogleAuthGuard)
    handleRedirect() {
        return {
            msg: 'OK'
        }
    }
    
}