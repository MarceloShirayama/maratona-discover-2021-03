let data = {
  name: 'João',
  avatar: 'https://img.elo7.com.br/product/main/2A12948/caricatura-individual-de-rosto-festa.jpg',
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
