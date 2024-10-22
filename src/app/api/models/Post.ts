// src/app/api/models/Post.ts
import { Entity, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { User } from './User';
import {PostClap} from "@/app/api/models/PostClap";
import {Tag} from "@/app/api/models/Tag";
import {Comment} from "@/app/api/models/Comment";

@Entity()
export class Post extends CommonEntity {

    @Column({ type: 'int', default: 1 })
    view: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    thumbnail: string;

    @Column('text')
    content: string;

    @ManyToOne(() => User, (user) => user.posts)
    author: Promise<User>;

    @OneToMany(() => Comment, comment => comment.post)
    comments: Promise<Comment[]>;

    @OneToMany(() => PostClap, clap => clap.post)
    claps:  Promise<PostClap[][]>;

    @ManyToMany(() => Tag, tag => tag.posts)
    @JoinTable()
    tags: Promise<Tag[]>;
}
