import '../styles/uno.css'

export const metadata = {
  title: 'Next.js 14 + UnoCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
