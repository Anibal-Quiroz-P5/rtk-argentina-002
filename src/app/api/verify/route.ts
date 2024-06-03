// import User from "../../models/User";
// import connect from "../../utils/db";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import crypto from "crypto";
// import { log } from "console";
// import nodemailer from "nodemailer";

// // Ruta para verificar el token
// export const POSTVerify = async (request: any) => {
//   console.log("ENTRÉ A LA  RUTA   2    POSTVerify");
  
//   const { token } = await request.json();

//   await connect();

//   const user = await User.findOne({ verificationToken: token });

//   if (!user) {
//     return new NextResponse("Token de verificación inválido", { status: 400 });
//   }

//   // Marcar al usuario como verificado
//   user.verified = true;
//   await user.save();

//   return new NextResponse("Verificación exitosa", { status: 200 });
// };


// src/app/api/verify/route.ts
import User from "../../models/User";
import connect from "../../utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { log } from "console";
import nodemailer from "nodemailer";

// Ruta para verificar el token
export const POST = async (request: any) => {
  console.log("ENTRÉ A LA  RUTA   2    POSTVerify");
  
  const { token } = await request.json();

  await connect();

  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return new NextResponse("Token de verificación inválido", { status: 400 });
  }

  // Marcar al usuario como verificado
  user.verified = true;
  await user.save();

  return new NextResponse("Verificación exitosa", { status: 200 });
};