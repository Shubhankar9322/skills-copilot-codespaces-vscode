// Create web server
// Create web server for comment
//=============================================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);
router.post('/:id/delete', commentController.comment_delete_post);

// Create an Express application
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Use the router
app.use('/comments', router);

// Set the port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/comments`);
});
