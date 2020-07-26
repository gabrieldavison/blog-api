import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  //Gets auth header
  const bearerHeader = req.headers["authorization"];
  //Check to see if header is undefined
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    //Get the token from the split array
    const bearerToken = bearer[1];
    //Set the token
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

async function checkToken(req, res, next) {
  try {
    req.user = await jwt.verify(req.token, process.env.JWT_SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
}

export default { verifyToken, checkToken };
