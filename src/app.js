import express from 'express';
import cors from 'cors';
const servidor = express();


servidor.listen(5000,
    () => console.log('--> API on 👍'));