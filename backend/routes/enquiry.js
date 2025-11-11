const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const auth = require("../middleware/auth");

// ✅ Create enquiry
router.post("/create", auth, async (req, res) => {
  const { course } = req.body;
  const userId = req.user.id; 

  try {
    const enquiry = await prisma.enquiry.create({
      data: {
        course,
        userId,
      },
    });

    res.status(201).json({ message: "Enquiry submitted", enquiry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit enquiry" });
  }
});
// ✅ Fetch enquiries of logged-in user
router.get("/my-enquiries", auth, async (req, res) => {
  try {
    const enquiries = await prisma.enquiry.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
    });

    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: "Failed to load enquiries" });
  }
});

module.exports = router;
