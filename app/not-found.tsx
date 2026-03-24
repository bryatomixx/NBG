import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-7xl font-bold text-[#EA7F49] mb-4">404</p>
      <h1 className="text-2xl font-bold text-[#10393C] mb-3">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <Link href="/" className="bg-[#EA7F49] hover:bg-[#ED6835] text-white font-semibold px-8 py-3 rounded-full transition-colors">
        Back to Home
      </Link>
    </div>
  )
}
