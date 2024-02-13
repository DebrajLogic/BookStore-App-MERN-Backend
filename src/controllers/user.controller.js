import { User } from "../models/user.models.js";

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ error: "User Already Exists !!!" });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res
      .status(200)
      .json({ user, message: "User registered Successfully!" });
  } catch (error) {
    console.log("Error Creating User !!!", error);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (password !== user?.password) {
      return res.status(200).json({ error: "Invalid Credentials!" });
    }
    user.password = undefined;

    return res
      .status(200)
      .json({ user, message: "User logged in Successfully!" });
  } catch (error) {
    console.log("Failed to login user !!!", error);
  }
};
