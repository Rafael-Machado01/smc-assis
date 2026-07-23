import '@/app/globals.css'
import {ThemeProvider} from "next-themes";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400","600","800"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
    <body className={`${poppins.className} bg-white text-black dark:bg-[#0a0e1a] dark:text-white`}>
    <ThemeProvider defaultTheme='system' attribute='class' enableSystem={true} >
      <Header/>
      {children}
      <Footer/>
    </ThemeProvider>

    </body>
    </html>
  );
}
