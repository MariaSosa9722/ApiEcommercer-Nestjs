import { Controller,Post, Body,Get, Param, ParseIntPipe, Delete, Put} from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { get } from 'https';
import { User } from './user.entity';
import { promises } from 'dns';
import { UpdateUserDto } from './Dto/update-user.dto';


@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){

    }
    //Metodo para obtener la lista completo de los usuarios
    @Get()
    getUsers() :Promise<User[]>{
        return this.usersService.getUsers();
    }
    
    //Metodo para obtener solo a un usuario por Id
    @Get(':id') 
    getUser(@Param ('id', ParseIntPipe) id:number) : Promise<User>{
        return this.usersService.getUser(id);
    }

    //Metodo para crear un nuevo usuario
    @Post()
    createUser(@Body() newUser: CreateUserDto){

    return this.usersService.createUser(newUser)
    }

    //Metoto para actualizar los datos usuario mediante Id y el cuerpo de los nuevos registroa

    @Put(':id')
    updateUser(@Param ('id', ParseIntPipe) id:number, @Body() UpdUser: UpdateUserDto){
        return this.usersService.updateUser(id, UpdUser )

    }

    //Metodo para eliminar un registro usuario mediante su ID(PkUSer)

    @Delete(':id')
    deleteUser(@Param ('id', ParseIntPipe) id:number){
        
        return this.usersService.DeleteUser(id)

    }
}

