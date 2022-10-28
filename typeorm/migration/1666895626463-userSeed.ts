import { MigrationInterface, QueryRunner } from "typeorm"

export class userSeed1666895626463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO users (name, email, password) VALUES ('Andressa Helena',
         'handressa125@gmail.com', '123456')`
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM users WHERE email = 'handressa125@gmail.com'`,
            );

    }

}
