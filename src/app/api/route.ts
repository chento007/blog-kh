// src/app/api/route.ts
import { getDBConnection } from '@/app/api/database/connection';
import { User } from '@/app/api/models/User';

export async function GET() {
    try {

        const connection = await getDBConnection();

        const userRepository = connection.getRepository(User);

        const users = await userRepository.find({
            relations:{
                posts: {
                    comments: true,
                    claps: true
                },
            },
        });

        return new Response(JSON.stringify(users), {
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
