import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Portfolio @metatt</title>
                <meta name="description" content="@metatt" />
                <meta name="author" content="Timofej Musatov" />

                {/* OG */}
                <meta property="og:title" content="Timofej Musatov" />
                <meta property="og:description" content="@metatt" />
                            <meta property="og:image" content="/favicon.ico" />
            </head>
            <body className='max-w-screen-sm mx-auto selection:bg-primary selection:text-white font-sfmono'>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}
