const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const JWT_SECRET = 'ghd53vbsuaksi';

const protect = expressAsyncHandler(async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log('token', token)
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, Please Login");
    }
    const verified = jwt.verify(token.split(' ')[1], JWT_SECRET);
    console.log('verified', verified)
    const user = await User.find({_id: verified.id});
    console.log('uusususus', user)
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, Please Login", error);
  }
});

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Access denied. You are not an admin.");
  }
};

const isSeller = (req, res, next) => {
  console.log('hello role', req)
  if (req.user && (req.user[0].role === "seller" || req.user[0].role === "admin")) {
    next();
  } else {
    res.status(403);
    throw new Error("Access denied. You are not a seller.");
  }
};

module.exports = { protect, isAdmin, isSeller };
