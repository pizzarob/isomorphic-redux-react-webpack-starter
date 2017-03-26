
export default function html(routerWithContext, props) {
  const filename = '/client.js';
  const src = process.env.NODE_ENV !== 'production' ? `http://localhost:${process.env.DEV_SERVER_PORT}${filename}` : filename;
  return `
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title></title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <div id="app">${routerWithContext}</div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(props)};
                </script>
                <script src="${src}" defer></script>
            </body>
        </html>
    `;
}
