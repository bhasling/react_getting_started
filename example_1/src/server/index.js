import express from 'express';
import bodyParser from 'body-parser';
import next from 'next';

const isDevelopment = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDevelopment });
const nextHandler = app.getRequestHandler();
console.log("Prepare servers");
app.prepare()
    .then(() => {
        console.log("Start server");
        const server = express()
        server.use(bodyParser.json())
        server.set('trust proxy', true)
        server.get('*', (req, res) => {
            // all other pages
            return nextHandler(req, res)
        })

        const port = 3000;
        server.listen(port, (err) => {
            if (err) throw err
            if (isDevelopment)
                console.log('!!!!!!!!! RUNNING IN DEV MODE !!!!!!!!!!')
            console.log(`Ready on port ${port}`)
        })
    })
    .catch(exception => {
        console.log(exception);
        process.exit(1)
    })
