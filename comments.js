// Create a web server that listens on port 3000 using express
// Use the express.Router to create a new router
// Create a route for GET /comments that returns a list of comments
// Create a route for POST /comments that adds a new comment to the list
// Create a route for GET /comments/:id that returns a single comment
// Create a route for PUT /comments/:id that modifies a single comment
// Create a route for DELETE /comments/:id that deletes a single comment
// Export the router from the module

var express = require('express');
var router = express.Router();

var comments = [
  {id: 1, body: "Hello World"},
  {id: 2, body: "Hi"}
];

router.get('/comments', function(req, res) {
  res.json(comments);
});

router.post('/comments', function(req, res) {
  var newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

router.get('/comments/:id', function(req, res) {
  var comment = comments.find(function(comment) {
    return comment.id == req.params.id;
  });
  res.json(comment);
});

router.put('/comments/:id', function(req, res) {
  var comment = comments.find(function(comment) {
    return comment.id == req.params.id;
  });
  comment.body = req.body.body;
  res.json(comment);
});

router.delete('/comments/:id', function(req, res) {
  comments = comments.filter(function(comment) {
    return comment.id != req.params.id;
  });
  res.json({message: "Comment deleted"});
});

module.exports = router;