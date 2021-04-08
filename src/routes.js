const express = require('express');

const routes = express.Router();

const views = `${__dirname}/views/`;

const Profile = {
  data: {
    name: 'Jakeliny',
    avatar: 'https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4',
    'monthly-budget': 5000,
    'days-per-week': 6,
    'hours-per-day': 6,
    'vacation-per-year': 4,
    'value-hour': 75,
  },

  controllers: {
    index(req, res) {
      res.render(`${views}profile`, { profile: Profile.data });
    },

    update(req, res) {
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

      Profile.data = {
        ...Profile.data,
        ...data,
        'value-hour': valueHour,
      };

      return res.redirect('/profile');
    },
  },
};

const Job = {
  data: [
    {
      id: 1,
      name: 'Pizzaria Guloso',
      'daily-hours': 2,
      'total-hours': 2,
      createdAt: Date.now(),
    },
    {
      id: 2,
      name: 'OneTwoProject',
      'daily-hours': 3,
      'total-hours': 47,
      createdAt: Date.now(),
    },
    {
      id: 3,
      name: 'Auto Peças do João',
      'daily-hours': 4,
      'total-hours': 50,
      createdAt: Date.now(),
    },
  ],

  controllers: {
    index(req, res) {
      const updateJobs = Job.data.map((job) => {
        const remaining = Job.services.remainingDays(job);
        const status = remaining <= 0 ? 'done' : 'progress';

        return {
          ...job,
          remaining,
          status,
          budget: Job.services.calculatBudget(job, Profile.data['value-hour']),
        };
      });

      return res.render(`${views}index`, { jobs: updateJobs });
    },

    save(req, res) {
      const lastID = Job.data.length === 0 ? 0 : Job.data.length;
      const createdAt = Date.now();

      Job.data.push({ id: lastID + 1, ...req.body, createdAt });

      return res.redirect('/');
    },

    create(req, res) {
      return res.render(`${views}job`);
    },

    show(req, res) {
      const jobId = req.params.id;
      const job = Job.data.find((wantedJob) => Number(wantedJob.id) === Number(jobId));

      if (!job) {
        return res.send('<h1>Job not found</h1>');
      }

      job.budget = Job.services.calculatBudget(job, Profile.data['value-hour']);

      return res.render(`${views}job-edit`, { job });
    },

    update(req, res) {
      const jobId = req.params.id;
      const job = Job.data.find((wantedJob) => Number(wantedJob.id) === Number(jobId));

      if (!job) {
        return res.send('<h1>Job not found</h1>');
      }

      const updatedJob = {
        ...job,
        name: req.body.name,
        'total-hours': req.body['total-hours'],
        'daily-hours': req.body['daily-hours'],
      };

      Job.data = Job.data.map((wantedJob) => {
        if (Number(wantedJob.id) === Number(jobId)) {
          // eslint-disable-next-line no-param-reassign
          wantedJob = updatedJob;
        }
        return wantedJob;
      });

      return res.redirect(`/job/${jobId}`);
    },
  },

  services: {
    remainingDays(job) {
      const remainingDaysInitial = Math.ceil(job['total-hours'] / job['daily-hours']);
      const createDate = new Date(job.createdAt);
      const dueDay = createDate.getDate() + remainingDaysInitial;
      const dueDateInMs = createDate.setDate(dueDay);
      const timeDiffInMs = dueDateInMs - Date.now();
      const dayMs = 1000 * 60 * 60 * 24;
      const dayDiff = Math.floor(timeDiffInMs / dayMs);

      return dayDiff;
    },
    calculatBudget: (job, valueHour) => valueHour * job['total-hours'],
  },
};

routes.get('/', Job.controllers.index);

routes.get('/job', Job.controllers.create);
routes.post('/job', Job.controllers.save);

routes.get('/job/:id', Job.controllers.show);
routes.post('/job/:id', Job.controllers.update);

routes.get('/profile', Profile.controllers.index);
routes.post('/profile', Profile.controllers.update);

module.exports = routes;
