// src/app/api/models/Tag.ts
import { Entity, Column, ManyToMany } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { Post } from './Post';

@Entity()
export class Tag extends CommonEntity {
    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Post, post => post.tags)
    posts: Promise<Post[]>;
}
