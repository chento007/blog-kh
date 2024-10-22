// src/app/api/models/Post.ts
import { Entity, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { User } from './User';

@Entity()
export class Position extends CommonEntity {

    @Column({ length: 100 })
    title: string;

    @OneToMany(() => User, user => user.position)
    users: Promise<User[]>;
}