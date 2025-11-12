const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const auth = require("../middleware/auth");

/**
 * ✅ Create enquiry (USER)
 */
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

/**
 * ✅ Get enquiries of logged-in user
 */
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

/**
 * ✅ Admin — get ALL enquiries (with user details)
 */
router.get("/all", auth, async (req, res) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ error: "Only admin can view all enquiries" });
    }

    const enquiries = await prisma.enquiry.findMany({
      include: {
        user: true,      // <-- includes user name & email in response
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(enquiries);

  } catch (err) {
    console.error("Error listing enquiries:", err);
    res.status(500).json({ error: "Failed to load enquiries" });
  }
});

/**
 * ✅ Admin — update enquiry status
 */
router.put("/update-status/:id", auth, async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ error: "Only admin can update status" });
    }

    const updated = await prisma.enquiry.update({
      where: { id },
      data: { status },
      include: { user: true },  // returns updated enquiry along with user info
    });

    res.json(updated);

  } catch (err) {
    console.error("Error updating enquiry:", err);
    res.status(500).json({ error: "Failed to update enquiry" });
  }
});

module.exports = router;
