// src/app/api/route.ts
import { getDBConnection } from '@/app/api/database/connection';
import { User } from '@/app/api/models/User';
import {Post} from "@/app/api/models/Post";

export async function GET() {
    try {

        const connection = await getDBConnection();

        const postRepository = connection.getRepository(Post);

        const posts = await postRepository.find({
            relations:{
                comments: true,
                author: {
                    position: true
                },
                tags: true
            },
            order: {
                comments: {
                    updateAt: "ASC"
                }
            }
        });

        return new Response(JSON.stringify(posts), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching users:', error);

        return new Response(JSON.stringify({ message: 'Error fetching users' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
