import { prisma } from "../config/db.js";
import { sendReferralEmail } from "../helper/helper.js";

const submitReferral = async (req, res) => {
  try {
    const {
      referrerName,
      referralCode,
      referrerEmail,
      referrerPhone,
      friendName,
      friendEmail,
      friendPhone,
      courseName,
      consent,
    } = req.body;

    if (
      !referrerName ||
      !referrerEmail ||
      !referrerPhone ||
      !friendName ||
      !friendEmail ||
      !friendPhone ||
      !courseName
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        referrerPhone,
        friendName,
        friendEmail,
        friendPhone,
        courseName,
        consent,
        referralCode,
      },
    });

    await sendReferralEmail(friendEmail, friendName);

    res
      .status(201)
      .json({ message: "Referral submitted successfully", referral });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { submitReferral };
