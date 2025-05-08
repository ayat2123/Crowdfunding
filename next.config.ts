module.exports = {
  async redirects() {
    return [
      {
        source: '/', // صفحه اصلی
        destination: '/main/Branding-and-organization', // صفحه مقصد
        permanent: false, // false به این معنی که این ریدایرکت موقتی است
      },
    ];
  },
};
