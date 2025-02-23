const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  name: 'mf-cart-app',

  exposes: {
    './cartRoutes': './src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

moduleFederationConfig.output.publicPath = "http://localhost:4202";
module.exports = moduleFederationConfig