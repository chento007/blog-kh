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
    url: "postgresql://blog-db_owner:vCo6BZT7wEbi@ep-little-dew-a8noqljp.eastus2.azure.neon.tech/blog-db?sslmode=require",
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [User, Tag, Follower, Comment, PostClap, Post, Position],
    migrations: ['./migrations/*.ts'],
    subscribers: [],
});

export const getDBConnection = async (): Promise<DataSource> => {
    if (!pgConnection.isInitialized) {
        await pgConnection.initialize();
    }
    return pgConnection;
};
