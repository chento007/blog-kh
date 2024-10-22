// src/app/api/models/Follower.ts
import { Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { User } from './User';

@Entity()
export class Follower extends CommonEntity {
    @ManyToOne(() => User)
    user: Promise<User>;

    @ManyToOne(() => User)
    follower: Promise<User>;
}
