const Database = require('./config');

const initDb = {
  async init() {
    const db = await Database;

    await db.exec(`
      DROP TABLE IF EXISTS profile;
      CREATE TABLE profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        days_per_week INT,
        hours_per_day INT,
        vacation_per_year INT,
        value_hour INT
      );
    `);

    await db.exec(`
      DROP TABLE IF EXISTS jobs;
      CREATE TABLE jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        daily_hours INT,
        total_hours INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.run(`
      INSERT INTO profile (
        name,
        avatar,
        monthly_budget,
        days_per_week,
        hours_per_day,
        vacation_per_year
      ) VALUES (
        'João',
        'https://img.elo7.com.br/product/main/2A12948/caricatura-individual-de-rosto-festa.jpg',
        4000,
        6,
        4,
        4
      );
    `);

    await db.run(`
      INSERT INTO jobs (
        name,
        daily_hours,
        total_hours
      ) VALUES (
        'Pizzaria Guloso',
        2,
        2
      );
    `);

    await db.run(`
      INSERT INTO jobs (
        name,
        daily_hours,
        total_hours
      ) VALUES (
        'OneTwoProject',
        3,
        47
      );
    `);

    await db.run(`
      INSERT INTO jobs (
        name,
        daily_hours,
        total_hours
      ) VALUES (
        'Auto Peças do João',
        2,
        50
      );
    `);

    await db.close();
  },
};

initDb.init();
