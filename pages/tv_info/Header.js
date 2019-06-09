import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header2() {
  return (
    <div>
      <Link href="/tvpage">
        <a style={linkStyle}>Home</a>
      </Link>
    </div>
  )
}
