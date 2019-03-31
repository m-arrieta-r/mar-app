module.exports = {
  apps : [{
    name: 'nuxtar',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
    exec_mode : 'cluster', // enables clustering
    instances: 'max',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
