import { IsEmail, IsString } from "class-validator"

export class CreatePracticeDto {
    @IsString()
    name: string

    @IsEmail()
    email: string
}
