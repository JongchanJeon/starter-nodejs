const express = require('express');
const { searchByHashtag, getMyPosts, renderMain, deletePost, updatePost } = require('../controllers');

const router = express.Router();

router.get('/myposts', getMyPosts);

router.get('/search', searchByHashtag);

router.get('/', renderMain);

router.get('/post/:id/deletePost', deletePost);

router.get('/posts/:id/updatePost', updatePost);
module.exports = router;
