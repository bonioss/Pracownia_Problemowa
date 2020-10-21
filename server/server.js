const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//for documentation
const swaggerUi = require('swagger-ui-express'),
YAML = require('yamljs');
swaggerDocument = YAML.load('./swagger.yaml');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const authRoutes = require('./routes/auth.routes');
const testRoutes = require('./routes/test.routes');
const kidRoutes  = require('./routes/kid.routes');
const parentRoutes  = require('./routes/parent.routes');

const app = express();

// Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());
// Set up CORS
app.use(
    cors({
      origin: [
        `${process.env.FRONT_URL}`,
        'http://localhost:3000',
      ],
      credentials: true
    })
  );

// Logging middleware only in development mode
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/kid', kidRoutes);
app.use('/api/v1/parent', parentRoutes);

// Set error handler
app.use(errorHandler);

//Set swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});