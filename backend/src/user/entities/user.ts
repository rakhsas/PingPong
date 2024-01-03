import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 45 })
    name: string;

    @Column({ type: 'varchar', length: 25 })
    username: string;

    @Column({ type: 'varchar', length: 45 })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
    /**
     * m - male
     * f - female
     * u - unspecified
    */
    gender: string;
}