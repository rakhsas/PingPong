import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";


const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
export class CreateUserDto {
    @IsString()
    @MinLength(4, {
        message: 'Name must have at least 4 charactes.'
    })
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    
    
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(4, {
        message: 'Username must have at least 4 characters.'
    })
    username: string;
    
    @IsNotEmpty()
    @ApiProperty()
    @IsEmail({ allow_display_name: true }, { message: 'Please provide valid Email.' })
    email: string;
    
    @IsNotEmpty()
    @ApiProperty()
    @Matches(passwordRegEx, { message: `Password too weak` })
    password: string;
    
    
    @IsString()
    @ApiProperty()
    @IsEnum(['f', 'm', 'u'])
    gender: string;
}