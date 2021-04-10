const Profile = require('../model/Profiler');
const Job = require('../model/Job');
const jobUtils = require('../utils/JobUtils');

module.exports = {
  async save(req, res) {
    await Job.create({ ...req.body });

    return res.redirect('/');
  },

  create(req, res) {
    return res.render('job');
  },

  async show(req, res) {
    const Jobs = await Job.get();
    const profile = await Profile.get();
    const jobId = req.params.id;
    const job = Jobs.find((wantedJob) => Number(wantedJob.id) === Number(jobId));

    if (!job) {
      return res.send('<h1>Job not found</h1>');
    }

    job.budget = jobUtils.calculatBudget(job, profile['value-hour']);

    return res.render('job-edit', { job });
  },

  async update(req, res) {
    const jobId = req.params.id;

    const updatedJob = {
      name: req.body.name,
      'total-hours': req.body['total-hours'],
      'daily-hours': req.body['daily-hours'],
    };

    await Job.update(updatedJob, jobId);

    return res.redirect(`/job/${jobId}`);
  },

  async delete(req, res) {
    const jobId = req.params.id;

    await Job.delete(jobId);

    return res.redirect('/');
  },
};
