import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export', // Detta skapar en 'out' mapp vid build
	images: { unoptimized: true },
}

export default nextConfig
