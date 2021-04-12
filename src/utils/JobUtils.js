module.exports = {
  remainingDays(job) {
    const remainingDaysInitial = Math.ceil(job['total-hours'] / job['daily-hours']);
    const createdAt = new Date(job.createdAt);
    // alterar o fuso horário (GMT) data e hora no JS
    const createDate = new Date(createdAt.valueOf() - createdAt.getTimezoneOffset() * 60000);
    const dueDay = createDate.getDate() + remainingDaysInitial;
    const dueDateInMs = createDate.setDate(dueDay);
    const timeDiffInMs = dueDateInMs - Date.now();
    const dayMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.floor(timeDiffInMs / dayMs);

    return dayDiff;
  },
  calculatBudget: (job, valueHour) => valueHour * job['total-hours'],
};
