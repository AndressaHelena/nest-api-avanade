import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async validaLogin(login: string, password: string) {
        console.log('Login',login);
        console.log('password',password);
        return{
            login, password, msg: 'Dados cadastrados com sucesso!'}
        
        
    }
}
