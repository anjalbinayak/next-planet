import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const { name, email, feedbackType, message } = req.body;
  try {
    await prisma.feedback.create({
      data: {
        email,
        name,
        feedbackType,
        message,
      },
    });
    return res
      .status(200)
      .json({ message: "Feedback submitted successfully." });
  } catch (error) {
    res.status(400).json({ error });
  }
}
