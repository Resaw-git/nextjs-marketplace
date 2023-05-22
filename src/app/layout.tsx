import "@/assets/styles/globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./layout.module.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Marketplace Why We",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
