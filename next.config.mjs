
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "localhost",
            "localhost:3000",
        ],
        remotePatterns:[
            {
                hostname:"localhost",
                protocol:"http"
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
 
export default nextConfig;