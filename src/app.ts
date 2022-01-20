import 'express-async-errors';
import './setup';

import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

/**
 * Initialize external resources before starting the server
 */
export async function init() {
}

export default app;
