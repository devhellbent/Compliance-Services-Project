module.exports = {
  apps: [
    {
      name: 'bharatfiling-app',
      script: 'npm',
      args: 'start',
      cwd: '/home/hellbent-bharatfiling/htdocs/bharatfiling.hellbent.in',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 4002,
        HOST: '0.0.0.0'
      },
      error_file: '/home/hellbent-bharatfiling/htdocs/bharatfiling.hellbent.in/logs/err.log',
      out_file: '/home/hellbent-bharatfiling/htdocs/bharatfiling.hellbent.in/logs/out.log',
      log_file: '/home/hellbent-bharatfiling/htdocs/bharatfiling.hellbent.in/logs/combined.log',
      time: true
    }
  ]
};
