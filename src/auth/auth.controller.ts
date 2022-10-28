import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

//http://localhost:3000/auth
@Controller('auth')//rota
export class AuthController {   
    //injeção de dependência
    constructor(private readonly authService: AuthService){}

    //http://localhost:3000/auth/login
    @Post('login')//rota
    async validaLogin(@Body()req){
        const{login, password} = req;
        //extrai de dentro de req cria uma constante logim e uma const password
        if(!login){
            throw new HttpException('Login não informado', HttpStatus.FORBIDDEN);
        }
        return this.authService.validaLogin(login, password);
    }
}
