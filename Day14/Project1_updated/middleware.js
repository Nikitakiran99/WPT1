const express = require('express');
const app = express();
const port = 3000;

// Middleware function to add data to the request object.
// The `app.use()` method applies this middleware to all incoming requests.
app.use((req, res, next) => {
    console.log('Middleware is running...');

    // Set a custom property on the request object.
    // This data can now be accessed by any subsequent middleware or route handler.
    req.myCustomData = {
        message: 'This data was set by the middleware.',
        timestamp: new Date().toISOString()
    };

    // Call `next()` to pass control to the next middleware or the final route handler.
    next();
});

// A route handler for the root path ('/').
// This function will be executed after the middleware.
app.get('/', (req, res) => {
    // Access the data that was set by the middleware on the request object.
    const dataFromMiddleware = req.myCustomData;

    // Send a dynamic response that includes the data from the middleware.
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Middleware Example</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                .container { 
                    width: 400px; 
                    margin: auto; 
                    padding: 20px; 
                    border: 2px solid #333; 
                    border-radius: 10px; 
                    background-color: #f4f4f4;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Middleware Data</h1>
                <p><strong>Message:</strong> ${dataFromMiddleware.message}</p>
                <p><strong>Timestamp:</strong> ${dataFromMiddleware.timestamp}</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});