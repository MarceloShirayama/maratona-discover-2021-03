const Profile = require('../model/Profiler');
const Job = require('../model/Job');
const jobUtils = require('../utils/JobUtils');

module.exports = {
  save(req, res) {
    const Jobs = Job.get();
    const lastID = Jobs.length === 0 ? 0 : Jobs.length;
    const createdAt = Date.now();

    Job.create({ id: lastID + 1, ...req.body, createdAt });

    return res.redirect('/');
  },

  create(req, res) {
    return res.render('job');
  },

  show(req, res) {
    const Jobs = Job.get();
    const profile = Profile.get();
    const jobId = req.params.id;
    const job = Jobs.find((wantedJob) => Number(wantedJob.id) === Number(jobId));

    if (!job) {
      return res.send('<h1>Job not found</h1>');
    }

    job.budget = jobUtils.calculatBudget(job, profile['value-hour']);

    return res.render('job-edit', { job });
  },

  update(req, res) {
    const Jobs = Job.get();
    const jobId = req.params.id;
    const job = Jobs.find((wantedJob) => Number(wantedJob.id) === Number(jobId));

    if (!job) {
      return res.send('<h1>Job not found</h1>');
    }

    const updatedJob = {
      ...job,
      name: req.body.name,
      'total-hours': req.body['total-hours'],
      'daily-hours': req.body['daily-hours'],
    };

    const newJobs = Jobs.map((wantedJob) => {
      if (Number(wantedJob.id) === Number(jobId)) {
        // eslint-disable-next-line no-param-reassign
        wantedJob = updatedJob;
      }
      return wantedJob;
    });

    Job.update(newJobs);

    return res.redirect(`/job/${jobId}`);
  },

  delete(req, res) {
    const jobId = req.params.id;

    Job.delete(jobId);

    return res.redirect('/');
  },
};
