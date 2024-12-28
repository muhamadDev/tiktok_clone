import { Client } from "pg";

export const client = new Client({
	user: 'lucifero',
	password: 'TheSeaIsNotBlueOk',
	host: 'localhost',
	port: '5432',
	database: 'mydb',
});

export function connect() {
    client.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});
}
        //     INSERT INTO users (username, email, image_url)
        // VALUES ('john_doe', 'john.doe@example.com', 'https://example.com/john.jpg');