import { PassportStrategy } from "@nestjs/passport";

import { Strategy, VerifyCallback } from "passport-google-oauth20";

import { Injectable } from "@nestjs/common";
import { Verify } from "crypto";

@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: '241934105745-rhemnprgppgkr700igdenm9iqflfjr57.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            scope: ['email', 'profile']
        });
    }
    async validate(
            accessToken: string,
            refreshToken: string,
            profile: any, done: VerifyCallback
    ): Promise<any>
    {
        try {
            // Check if email, name, and photos exist in the profile
            const email = profile?.emails?.[0]?.value;
            const firstName = profile?.name?.givenName;
            const lastName = profile?.name?.familyName;
            const picture = profile?.photos?.[0]?.value;

            if (!email || !firstName || !lastName || !picture) {
                throw new Error("Incomplete profile information");
            }

            const user = {
                provider: 'google',
                providerId: profile.id,
                email,
                firstName,
                lastName,
                picture,
            };

            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
}