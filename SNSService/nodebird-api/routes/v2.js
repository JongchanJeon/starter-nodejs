const express = require('express');
const cors = require('cors');
const { verifyToken, apiLimiter, corsWhenDomainMatches } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag, getAllPosts, deletePost, updatePost} = require('../controllers/v2');

const router = express.Router();
router.use(cors({
    credentials: true,
}));
router.use(corsWhenDomainMatches);

// POST /v2/token
router.post('/token', apiLimiter, createToken);

// POST /v2/test
router.get('/test', apiLimiter, verifyToken, tokenTest);

// GET /v2/posts/my
router.get('/posts/my', apiLimiter, verifyToken, getMyPosts);

router.get('/posts/all', apiLimiter, verifyToken, getAllPosts);

router.get('/post/:id/deletePost', apiLimiter, verifyToken, deletePost);
// GET /v2/posts/hashtag/:title
router.get('/posts/hashtag/:title', apiLimiter, verifyToken, getPostsByHashtag);

router.get('/posts/:id/updatePost/:update', apiLimiter, verifyToken, updatePost);

module.exports = router;
