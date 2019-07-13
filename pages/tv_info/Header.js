import Link from 'next/link'


const linkStyle = {
  marginRight: 15,
  fontSize: 20
}

export default function Header2() {
  return (
    <div>
      <Link href="/tvpage">
        <a style={linkStyle}>Search Page</a>
      </Link>
    </div>
  )
}
