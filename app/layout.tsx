import localFont from "next/font/local";
import "./globals.css";

const neue = localFont({
  src: [
    { path: "./fonts/NeueFrutigerWorld-Regular.woff", weight: "400" },
    { path: "./fonts/NeueFrutigerWorld-Medium.woff", weight: "500" },
    { path: "./fonts/NeueFrutigerWorld-Bold.woff", weight: "700" },
    { path: "./fonts/NeueFrutigerWorld-Black.woff", weight: "800" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' dir='rtl' lang='ar'>
      <body
        className={`${neue.className} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
