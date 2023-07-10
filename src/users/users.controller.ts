import { Controller,Post, Body,Get, Param, ParseIntPipe} from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { get } from 'https';
import { User } from './user.entity';
import { promises } from 'dns';


@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){

    }

    //Metodo para obtener la lista completo de los usuarios
    @Get()
    getUsers() :Promise<User[]>{
        return this.usersService.getUsers();
    }

    
  //
    @Get(':id')
    getUser(@Param ('id', ParseIntPipe) id:number) : Promise<User>{
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto){

    return this.usersService.createUser(newUser)
    }
}

