require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host:
    'ls-917b9982650d743adf4c5bf796db4facb95cac3f.cgsbjlmax2ck.us-east-1.rds.amazonaws.com',
  username: 'dbmasteruser',
  password: '19921104abc',
  database: 'mazzafctest',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
