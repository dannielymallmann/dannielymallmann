import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Danniely Mallmann</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">mallmann90@gmail.com</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="https://twitter.com/dannielymallman" className="text-sm font-semibold text-gray-900">
          x
        </a>
        <a href="https://dribbble.com/dannielymallmann" className="text-sm font-semibold text-gray-900">
          dribble
        </a>
        <a href="https://www.figma.com/@dannielymallman" className="text-sm font-semibold text-gray-900">
          figma
        </a>
        <a href="https://github.com/dannielymallmann" className="text-sm font-semibold text-gray-900">
          github
        </a>
        <a href="https://www.linkedin.com/in/dannielymallmann" className="text-sm font-semibold text-gray-900">
          in
        </a>
      </div>
    </div>
  )
}
