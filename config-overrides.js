const paths = require('react-scripts/config/paths');
const path = require('path');

const { alias } = require('react-app-rewire-alias');

const pathnameResolve = (aliasesPath) => path.resolve(__dirname, `${paths.appSrc}${aliasesPath}`);

const defineAliases = (config) =>
  alias({
    '@namespace': pathnameResolve('/core/typings/'),
    '@contexts': pathnameResolve('/contexts/'),
    '@themes': pathnameResolve('/themes/'),
    '@sever': pathnameResolve('/sever'),
    '@helpers': pathnameResolve('/helpers'),
    '@components': pathnameResolve('/components'),
    '@assets': pathnameResolve('/assets'),
    '@utils': pathnameResolve('/utils'),
    '@secure-console': pathnameResolve('/utils/secure-console'),
  })(config);

module.exports = {
  webpack: (config, env) => {
    if (env === 'development') {
      defineAliases(config);
      return config;
    }

    return [config, defineAliases(config)];
  },
};
