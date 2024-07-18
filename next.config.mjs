/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[{
            protocol:'https',
            hostname:'https://upload.wikimedia.org'
        }]
    },
};

export default nextConfig;
