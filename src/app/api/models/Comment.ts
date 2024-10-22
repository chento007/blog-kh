// src/app/api/models/Comment.ts
import { Entity, Column, ManyToOne } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { User } from './User';
import { Post } from './Post';

@Entity()
export class Comment extends CommonEntity {
    @Column('text')
    content: string;

    @ManyToOne(() => User, user => user.comments)
    author: Promise<User>;

    @ManyToOne(() => Post, post => post.comments)
    post: Promise<Post>;
}
