export const metadata = {
  title: 'Invoice Generator',
  description: 'Wrapper around Steampunk\'s Stripe account to automatically generate custom pyaments links and invoices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
