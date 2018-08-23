module.exports = process.env.DATABASE_URL || {
  database: 'conglomerates_dev',
  host: 'localhost',
  port: 5432,
};
