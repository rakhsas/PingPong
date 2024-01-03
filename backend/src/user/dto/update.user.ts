import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";


const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;
export class UpdateUserDto {
    @IsString()
    @MinLength(4, {
        message: 'Name must have at least 4 charactes.'
    })
    @IsNotEmpty()
    name: string;


    @IsNotEmpty()
    @MinLength(4, {
        message: 'Username must have at least 4 characters.'
    })
    username: string;

    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    email: string;

    @IsNotEmpty()
    @Matches(passwordRegEx, {
        message: `Password must contain Minimum 8 and Maximum 30 characters,
        at least One UpperCase letter,
        One LowerCase letter,
        One number and,
        One Special character`
    })
    password: string;


    @IsString()
    @IsEnum(['f', 'm', 'u'])
    gender: string;
}