import { password } from 'bun';
import express from 'express';
import postgres from 'postgres';
import { validateUser } from './validations';
import type { Request, Response, NextFunction } from 'express';


const app = express();

app.use(express.json());


const sql = postgres({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    db: 'task',
    password: 'Fla2x1Flu!'
});

const newUser = await sql`INSERT INTO users (username, password) VALUES ('Renato', 'ren123');`

app.post('/login/unsafe', validateUser, async (req: Request, res: Response, next: NextFunction) =>{
    const { username, password } = req.body;
    try {

        // const query = `SELECT * FROM users WHERE username=${req.body.username} AND password=${req.body.password}`;
        // console.log('query: ', query)
        // const user = await sql.unsafe(query)
        const user = await sql`SELECT * FROM users WHERE username=${username} AND password=${password}`
        console.log('user: ', user)
        res.json({user})
        
    } catch (error) {
        console.error("Failed to load ", error)
        res.status(500).json({error})
    }
});




const port = process.env.PORT || 5121;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})