import * as z from "zod";
import { prisma } from "../prisma.js";
export const RegisrerUser = async (req, res) => {
  try {
    // validation data
    const userSchema = z.object({
      fullname: z.string().smin(3, "Fullname minimal 6 karakter"),
      username: z.string().min(3, "Username minimal 6 karakter"),
      email: z.string().email("Email tidak valid"),
      password: z.string().min(8, "Password minimal 8 karakter"),
    });
    const validated = userSchema.safeParse(req.body);

    // cek email sudah ada atau belum
    const emailExists = await prisma.user.findUnique({
      where: { email: validated.data.email },
    });

    if (emailExists) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    const usernameExists = await prisma.user.findUnique({
      where: { username: validated.data.username },
    });
    if (usernameExists) {
      return res.status(400).json({ message: "Username sudah terdaftar" });
    }

    // hash password

    // insert user ke database
  } catch (err) {
    // console.error(error);
    if (err instanceof Error && "issues" in err) {
      return res.status(400).json({
        message: err,
      });
    }
  }
  //   const { fullName, username, email, password } = req.body;
  //   res.json({
  //     message: "Register Page",
  //     data: { fullName, username, email, password },
  //   });
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Page" });
};
