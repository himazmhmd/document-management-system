import User from "../models/User.js";
export const addLeave = async (req, res) => {
  const {
    dateFrom,
    apointmentDate,
    dateTo,
    reason,
    nameOfActor,
    actorEmail,
    isHODApproved,
    isDeanApproved,
    isARApproved,
  } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          dutyLeave: [
            {
              dateFrom,
              apointmentDate,
              dateTo,
              reason,
              nameOfActor,
              actorEmail,
              isHODApproved,
              isDeanApproved,
              isARApproved,
            },
          ],
        },
      },
      { new: true }
    );
    console.log(user);
    res.status(200).json({ msg: `Succesfully updated user.`, user });
  } catch (err) {
    res.status(400).json({ msg: `ERROR: ${err}` });
  }
};
