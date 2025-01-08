import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
export async function POST() {
  const prisma = new PrismaClient();
  const hashedPassword = bcrypt.hashSync("123456789", 10);
  const createAdmin = async () => {
    try {
      await prisma.user.create({
        data: {
          name: "admin",
          email: "admin@admin.com",
          password: hashedPassword,
          phoneNumber: "01111111111",
          role: "ADMIN",
          isActive: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const admin = await prisma.user.findFirst({
    where: {
      role: "ADMIN",
    },
  });
  if (admin) {
    await prisma.user
      .delete({
        where: {
          id: admin.id,
        },
      })
      .then(() => {
        createAdmin();
      });
  } else {
    createAdmin();
  }

  return NextResponse.json(
    { message: "Admin has been created!" },
    { status: 200 }
  );
}
