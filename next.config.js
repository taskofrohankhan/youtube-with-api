/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ytimg.com',
				port: '',
				pathname: '/vi/**',
			},
			{
				protocol: 'https',
				hostname: 'yt3.ggpht.com',
			},
		],
	},
}

module.exports = nextConfig
