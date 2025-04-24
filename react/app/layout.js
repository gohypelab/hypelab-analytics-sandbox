import '../styles/globals.css';

export const metadata = {
  title: 'Flash Notice Demo',
  description: 'Next.js Flash Notice Demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* HypeLabAnalytics script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !(function (h, y, p, e, l, a, b) {
                ((a = document.createElement(h)).async = !0),
                  (a.src = y),
                  (a.onload = function () {
                    (l = new HypeLabAnalytics.Client({
                      environment: p,
                      propertySlug: e,
                      ...l,
                    })),
                      HypeLabAnalytics.setClient(l);
                  }),
                  (b = document.getElementsByTagName(h)[0]).parentNode.insertBefore(a, b);
              })('script', 'https://api.hypelab.com/v1/scripts/ha-sdk.js?v=0', 'production', 'hypelab', {
                privacy: { trackAllSessions: true },
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
