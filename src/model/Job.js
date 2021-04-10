let data = [
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
    'daily-hours': 2,
    'total-hours': 50,
    createdAt: Date.now(),
  },
];

module.exports = {
  get: () => data,
  update(newJob) {
    data = newJob;
  },
  delete(jobId) {
    data = data.filter((job) => Number(job.id) !== Number(jobId));
  },
  create: (newJob) => data.push(newJob),
};
