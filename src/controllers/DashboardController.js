const Profile = require('../model/Profiler');
const Job = require('../model/Job');
const jobUtils = require('../utils/JobUtils');

module.exports = {
  index(req, res) {
    const Jobs = Job.get();
    const profile = Profile.get();

    const statusCount = {
      progress: 0,
      done: 0,
      total: Jobs.length,
    };

    let dailyHoursOfAllJobs = 0;

    const updateJobs = Jobs.map((job) => {
      const remaining = jobUtils.remainingDays(job);
      const status = remaining <= 0 ? 'done' : 'progress';

      // Somando a quantidade de status
      // statusCount[done] += 1
      statusCount[status] += 1;

      // if (status === 'progress') {
      //   dailyHoursOfAllJobs += Number(job['daily-hours']);
      // }
      dailyHoursOfAllJobs = status === 'progress'
        ? dailyHoursOfAllJobs += Number(job['daily-hours'])
        : dailyHoursOfAllJobs;

      return {
        ...job,
        remaining,
        status,
        budget: jobUtils.calculatBudget(job, profile['value-hour']),
      };
    });
    const freeHoursInDay = Number(profile['hours-per-day']) - dailyHoursOfAllJobs;

    return res.render('index', {
      jobs: updateJobs, profile, statusCount, freeHoursInDay,
    });
  },
};
