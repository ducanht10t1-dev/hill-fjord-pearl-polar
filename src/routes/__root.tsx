import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Đức Anh";

export const Route = createRootRoute({
  notFoundComponent: () => (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6 text-ink">
      <p className="font-display text-lg">Không tìm thấy trang.</p>
    </main>
  ),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Đức Anh — luyện đề Conceptual Framework 2018 và IFRS 18. Đề chỉ có bối cảnh; nộp xong mới có giải thích.",
      },
      { name: "theme-color", content: "#2A3546" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="vi" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
