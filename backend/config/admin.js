module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12ded6433322cdb0567ccc5952cb9a5c'),
  },
});
