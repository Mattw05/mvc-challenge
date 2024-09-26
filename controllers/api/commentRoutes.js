const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    console.log("Add Comment",req.body)
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newComment,"Comment")
    res.status(200).json(newComment);
  } catch (err) {
    console.log("Err --------------------------------",err)
    res.status(400).json(err);
  }
});

module.exports = router;
