import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {User} from "@/app/api/models/User";
import {Tag} from "@/app/api/models/Tag";
import {Follower} from "@/app/api/models/Follower";
import {Comment} from "@/app/api/models/Comment";
import {PostClap} from "@/app/api/models/PostClap";
import {Post} from "@/app/api/models/Post";
import {Position} from "@/app/api/models/Position";

export const pgConnection = new DataSource({
    type: 'postgres',
    url: process.env.POSTGRES_URL,
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [User, Tag, Follower, Comment, PostClap, Post, Position],
});

export const getDBConnection = async (): Promise<DataSource> => {
    if (!pgConnection.isInitialized) {
        try {
            await pgConnection.initialize();
            console.log("Database connection established successfully.");
        } catch (error) {
            console.error("Failed to connect to the database:", error);
        }
    }
    return pgConnection;
};