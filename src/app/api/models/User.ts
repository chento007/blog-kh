// src/app/api/models/User.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';
import {CommonEntity} from "@/app/api/models/CommonEntity";
import {Post} from "@/app/api/models/Post";
import {PostClap} from "@/app/api/models/PostClap";
import {Comment} from "@/app/api/models/Comment";
import {Position} from "@/app/api/models/Position";

@Entity()
export class User extends CommonEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({nullable:true})
    photo: string;

    @ManyToOne(() => Position, position => position.users)
    position: Promise<Position>;

    @OneToMany(() => Post, post => post.author)
    posts: Promise<Post[]>;

    @OneToMany(() => Comment, comment => comment.author)
    comments: Promise<Comment[]>;

    @OneToMany(() => PostClap, clap => clap.user)
    claps: Promise<PostClap[]>;
}