const { createProxyMiddleware } = require("http-proxy-middleware");
const ROUTES = [
  {
    url: "/auth",
    auth: false,
    creditCheck: false,
    proxy: {
      target: process.env.SERVER_AUTH,
      changeOrigin: true,
      pathRewrite: {
        [`^/auth`]: "",
      },
    },
  },
  {
    url: "/user",
    auth: false,
    creditCheck: false,
    proxy: {
      target: process.env.SERVER_USER,
      changeOrigin: true,
      pathRewrite: {
        [`^/user`]: "",
      },
    },
  },
  {
    url: "/chat",
    auth: false,
    creditCheck: false,
    proxy: {
      target: process.env.SERVER_CHAT,
      changeOrigin: true,
      pathRewrite: {
        [`^/chat`]: "",
      },
    },
  },
];
exports.ROUTES = ROUTES;

const setupProxies = (app, routes) => {
  routes.forEach((r) => {
    app.use(r.url, createProxyMiddleware(r.proxy));
  });
};
exports.setupProxies = setupProxies;
