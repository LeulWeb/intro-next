


import NewTodo from '@/components/NewTodo'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <NewTodo />
        

        {children}
        </body>
    </html>
  )
}
