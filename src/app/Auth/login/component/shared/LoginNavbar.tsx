import Link from 'next/link'
import Image from 'next/image'

export default function LoginNavbar() {
  const links = [
    {
      text: "Home",
      href: "/Home"
    },
    {
      text: "Brand and organization",
      href: "/main/Branding-and-organization"
    },
    {
      text: "Help and support",
      href: "/main/Help-and-support"
    },
    {
      text: "About us",
      href: "/main/Aboutus"
    }
  ]
  return (
    <nav className="ltr">
      <div className="max-w-md mx-auto p-4">
        <ul className='flex items-center justify-center mt-3'>
          {links.map((link, index) => (
            <li className='p-2 flex items-center gap-1' key={link.text}>
              <Link href={link.href} className="no-underline hover:text-indigo-600 text-xs">{link.text}</Link>
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
