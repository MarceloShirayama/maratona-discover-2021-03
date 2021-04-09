module.exports = {
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
};
