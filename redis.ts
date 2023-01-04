import Redis from 'ioredis';
// import { Redis } from '@upstash/redis';


const redis = new Redis(process.env.REDIS_URL!)

export default redis;