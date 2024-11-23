const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.admin.findFirst(
    {
        where: {
            email: 'admin@example.com'
        }
    }
  )
  if (!admin) {
    await prisma.admin.create({
      data: {
        name: 'Admin',
        email: 'admin@example.com',
        password: await hash('admin123', 10),
        },
    });
    }
    console.log('Admin created successfully');

  console.log(admin);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });