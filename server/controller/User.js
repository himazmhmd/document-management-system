import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = new User({ ...req.body, isVerified: false });
    const data = await user.save();
    res.status(200).json({ msg: `SUCCESS.`, data });
  } catch (err) {
    res.status(400).json({ msg: `ERROR: ${err}` });
  }
};

export const deleteUser = async (req, res) => {
  try {
    console.log();
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: `Successfully deleted user`, user });
  } catch (err) {
    res.status(400).json({ msg: `ERROR: ${err}` });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ msg: `SUCCESS.`, user });
  } catch (err) {
    res.status(400).json({ msg: `ERROR: ${err}` });
    console.log(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );
    res.status(200).json({ msg: `Succesfully updated user.`, user });
  } catch (err) {
    res.status(400).json({ msg: `ERROR: ${err}` });
  }
};
