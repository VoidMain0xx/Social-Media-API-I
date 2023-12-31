import userModel from "./user.Model.js";
import Jwt from "jsonwebtoken";

export default class userController {
  signUp(req, res) {
    const { name, email, password } = req.body;
    const newUser = userModel.signUp(name, email, password);
    console.log(newUser);
    res.status(201).send(newUser);
  }

  signIn(req, res) {
    const signIn = userModel.signIn(req.body.email, req.body.password);
    if (!signIn) {
      res.status(400).render("Invalid Credentials");
    } else {
      // 1 Create a Token
      const token = Jwt.sign(
        {
          UserId: signIn.id,
          email: signIn.email,
        },
        "ZzREdmpffn",
        {
          expiresIn: "7d",
        }
      );
      console.log(token);
      return res.status(200).send(token);
    }
  }
}
