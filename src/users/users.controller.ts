import { 
    Controller, 
    Get, 
    Post,
    Patch, 
    Delete,
    Body,//@Body pega o corpo da requisição
    Param //@Paran pega a URL - @Req pega todo request
} from '@nestjs/common';
import { users } from '@prisma/client';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    //Criar
    @Post()
    async createUser(@Body(/*guarda 3 informações aqui - name, email e password e guardando em req*/
    ) req: CreateUserDTO): Promise<users>{
        return this.usersService.createUser(req);
    }

    //Listar todos localhost3000/users
    @Get()
    async findAll(){
        return this.usersService.findAll()
    }

    //Listar um localhost3000/users/1
    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.usersService.findOne(id)
    }
    

    //Atualizar localhost3000/users/50
    @Patch(':id')
    async update(@Param('id') id:string, @Body() req: UpdateUserDTO){
        return this.usersService.update(id, req);
    }


    //Deletar
}
