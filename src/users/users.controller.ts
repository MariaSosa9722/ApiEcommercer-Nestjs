import { Controller,Post, Body,Get} from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { get } from 'https';


@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){

    }

    @Get()
    getUSers(){
        return this.usersService.getUser();
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto){

    return this.usersService.createUser(newUser)
    }
}

