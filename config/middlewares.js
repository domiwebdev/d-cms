module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com', 'domi-cms.s3.eu-west-1.amazonaws.com', "cdn.jsdelivr.net", "strapi.io", "s3.amazonaws.com"],
          'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com', 'domi-cms.s3.eu-west-1.amazonaws.com'],
          "script-src": ["'self'", "editor.unlayer.com"], // email designer plugin
          "frame-src": ["'self'", "editor.unlayer.com"], // email designer plugin
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
