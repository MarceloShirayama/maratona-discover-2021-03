const Profile = require('../model/Profiler');

module.exports = {
  async index(req, res) {
    res.render('profile', { profile: await Profile.get() });
  },

  async update(req, res) {
    // req.body para pegar os dados
    const data = req.body;
    // definir quantas semanas tem um ano
    const weeksPerYear = 52;
    // remover as semanas de férias do ano, para pegar quantas semanas tem 1 mês
    const weeksPerMonth = (weeksPerYear - data['vacation-per-year']) / 12;
    // quantas horas por semana estou trabalhando
    const weekTotalHours = data['hours-per-day'] * data['days-per-week'];
    // total de horas trabalhadas no mês
    const monthlyTotalHours = weekTotalHours * weeksPerMonth;
    // valor da hora
    const valueHour = data['monthly-budget'] / monthlyTotalHours;

    const profile = await Profile.get();

    await Profile.update({
      ...profile,
      ...data,
      'value-hour': valueHour,
    });

    return res.redirect('/profile');
  },
};
