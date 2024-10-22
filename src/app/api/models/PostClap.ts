// src/app/api/models/PostClap.ts
import { Entity, ManyToOne, Column } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { Post } from './Post';
import { User } from './User';

@Entity()
export class PostClap extends CommonEntity {
    @ManyToOne(() => Post, post => post.claps)
    post: Promise<Post>;

    @ManyToOne(() => User, user => user.claps)
    user: Promise<User>;

    @Column({ type: 'int', default: 1 })
    claps: number;
}
