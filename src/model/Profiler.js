let data = {
  name: 'Jakeliny',
  avatar: 'https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4',
  'monthly-budget': 5000,
  'days-per-week': 6,
  'hours-per-day': 6,
  'vacation-per-year': 4,
  'value-hour': 75,
};

module.exports = {
  get: () => data,
  update(newData) {
    data = newData;
  },
};
