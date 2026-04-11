module.exports = {
  apps: [
    {
      name: 'kinetic-portfolio',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
