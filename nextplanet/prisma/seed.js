import { prisma, PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  await prisma.feedback.createMany({
    data: [
      {
        message: "Lovely app",
        feedbackType: "FEEDBACK",
        email: "test@example.co",
        name: "Mahmoud",
      },
      {
        message: "Add dark mode",
        feedbackType: "IDEA",
        email: "test2@example.com",
        name: "Dan",
      },
      {
        message: "layout is broken on mobile",
        feedbackType: "ISSUE",
        email: "anjal@example.com",
        name: "Alex",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
