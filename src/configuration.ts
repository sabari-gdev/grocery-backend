import { config } from 'dotenv';
config();

const configuration = {
  pg: {
    name: 'postgres',
    url: process.env.POSTGRES_URL,
    host: 'postgres',
    db_name: 'grocery_db',
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
};

export default configuration;
