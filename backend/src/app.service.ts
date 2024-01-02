import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No User From Google.'
    }
    return {
      message: 'User info from Google',
      user: req.user
    }
  }
  hello() {
    return "Hello"
  }
}
