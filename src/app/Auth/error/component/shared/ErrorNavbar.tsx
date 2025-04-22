import Link from 'next/link'
import Image from 'next/image'

export default function ErrorNavbar() {
  const links = [
    {
      text: "Solutions",
      href: "/Solutions"
    },
    {
      text: "Product",
      href: "/Product"
    },
    {
      text: "Company",
      href: "/Company"
    },
    {
      text: "Help and support",
      href: "/Help and support"
    }
  ]
  return (
    <nav className="ltr">
      <div className="max-w-md mx-auto p-4">
        <ul className='flex items-center justify-center mt-3'>
          {links.map((link, index) => (
            <li className='p-2 flex items-center gap-2' key={link.text}>
              <Link href={link.href} className="no-underline hover:text-indigo-600 text-sm">{link.text}</Link>
              {index !== links.length - 1 && (
                <Image 
                  src="/Vector (4).png"
                  alt="Vector"
                  width={8}
                  height={8}
                  className="w-2 h-2"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
