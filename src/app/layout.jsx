import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;

export default async function RootLayout({ children }) {
    const pageMap = await getPageMap();
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
            // Add data-theme attribute to force light mode
        >
            <Head
                // ... Your additional head options
                backgroundColor={{ dark: "#0f172a", light: "#fefce8" }}
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    pageMap={pageMap}
                    // docsRepositoryBase="https://github.com/casdoc/CasDoc-Wiki/tree/main/src/app"
                >
                    <Navbar
                        logo={
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                }}
                            >
                                <Image
                                    src="/CasDoc-Logo.svg"
                                    alt="CasDoc Logo"
                                    width={24}
                                    height={24}
                                />
                                <b>CasDoc</b>
                            </div>
                        }
                    >
                        <ThemeSwitch />
                    </Navbar>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
