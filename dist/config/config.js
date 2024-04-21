require('dotenv').config({ path: '../../.env' });
module.exports = {
    development: {
        replication: {
          read: [
            {
              username:'admin',
              password:'admin1234',
              database:'student_hub',
              host:'database-2.cpga64ocssm7.us-east-1.rds.amazonaws.com',
              
            }
          ],
          write:  {
            username:'admin',
            password:'admin1234',
            database:'student_hub',
            host:'database-2.cpga64ocssm7.us-east-1.rds.amazonaws.com',
              
          }
        },
        port: +(process.env.DATABASE_PORT),
        dialect: 'mysql',
        logging: false,
        pool: {
          max: 30,
          idle: 30000,
          evict: 10000,
          acquire: 60000
        }
      },
}