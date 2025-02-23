const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  remotes: {
    "mf-product-app": "http://localhost:4201/remoteEntry.js",    
    "mf-cart-app": "http://localhost:4202/remoteEntry.js",    
  },
  
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

moduleFederationConfig.output.publicPath = "http://localhost:4200/";
module.exports = moduleFederationConfig
