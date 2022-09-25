import { MongoClient, Collection } from 'mongodb';

interface ConnectType {
  db: Collection;
  client: MongoClient;
}

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connect(): Promise<ConnectType> {
  await client.connect();

  const db = client.db('SoundTrack')
  return { db, client };
}