// import User from '../../models/User';
// import connect from '../../utils/db';
// import bcrypt from 'bcryptjs';
// import { NextResponse } from 'next/server';
// import crypto from 'crypto'; 
// import { log } from 'console';

// export const POST = async (request: any) => {
//   const {email, password, verificationToken} = await request.json();

//   await connect();

//   const existingUser = await User.findOne({ email });

//   if(existingUser) {
//     return new NextResponse("Email is already in use", {status: 400});
//   }

//   const hashedPassword = await bcrypt.hash(password, 5);

//   const token = verificationToken || crypto.randomBytes(20).toString('hex');

//   const newUser = new User({
//     email, 
//     password: hashedPassword,
//     verificationToken: token,
//   })


//   try {
//     await newUser.save();
//     return new NextResponse("User created, user is registered", {status: 200});
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };


//-------------------------------------------------


// import User from '../../models/User';
// import connect from '../../utils/db';
// import bcrypt from 'bcryptjs';
// import { NextResponse } from 'next/server';
// import crypto from 'crypto';
// import { log } from 'console';
// import nodemailer from 'nodemailer';

// export const POST = async (request: any) => {
//   const { email, password } = await request.json();

//   await connect();

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return new NextResponse("Email is already in use", { status: 400 });
//   }

//   // Generar un token de verificación
//   const verificationToken = generateVerificationToken();

//   console.log( "EL TOKEN DE VERIFICACION GENERADO ES:", verificationToken);
  

//   const hashedPassword = await bcrypt.hash(password, 5);

//   const newUser = new User({
//     email,
//     password: hashedPassword,
//     verificationToken: verificationToken,
//     verified: false,
//   });

//   try {
//     await newUser.save();

//     // Enviar el correo de verificación
//     await sendVerificationEmail(email, verificationToken);

//     return new NextResponse("Usuario creado, usuario registrado", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };

// // Función para generar un token de verificación
// function generateVerificationToken(): string {
//   return Math.random().toString(36).substring(2, 10);
// }

// // Función para enviar el correo de verificación
// async function sendVerificationEmail(email: string, verificationToken: string) {
//   const transporter = nodemailer.createTransport({
//     // Configuración de Nodemailer
//     // host: 'smtp.example.com',
//     // port: 587,
//     // auth: {
//     //   user: 'your-email@example.com',
//     //   pass: 'your-password'

//     host: 'smtp-mail.outlook.com',
//     port: 587,
//     auth: {
//       user: 'anibal_d_quiroz@outlook.com',
//       pass: 'cafeconleche1*'
//     }
//   });

//   /* const verificationLink = `https://www.mipagina.com/verify?token=${verificationToken}`; */
//   const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;


//   await transporter.sendMail({
//     // from: 'your-email@example.com',
//     // to: email,
//     // subject: 'Verifica tu cuenta',
//     // text: `Haz clic en el siguiente enlace para verificar tu cuenta: ${verificationLink}`

//     from: 'anibal_d_quiroz@outlook.com',
//     to: email,
//     subject: 'Verifica tu cuenta',
//     text: `Haz clic en el siguiente enlace para verificar tu cuenta: ${verificationLink}`
//   });
// }


//-----------------------------------------------------------


import User from '../../models/User';
import connect from '../../utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { log } from 'console';
import nodemailer from 'nodemailer';

export const POST = async (request: any) => {
  console.log("ENTRÉ A LA  RUTA  1    POST");
  const { email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  // Generar un token de verificación
  const verificationToken = generateVerificationToken();

  console.log("EL TOKEN DE VERIFICACION GENERADO ES:", verificationToken);

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    email,
    password: hashedPassword,
    verificationToken: verificationToken,
    verified: false,
  });

  try {
    await newUser.save();

    // Enviar el correo de verificación
    await sendVerificationEmail(email, verificationToken);
    
    return new NextResponse("Usuario creado, usuario registrado", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};

// Función para generar un token de verificación
function generateVerificationToken(): string {
  return Math.random().toString(36).substring(2, 10);
}

// Función para enviar el correo de verificación
async function sendVerificationEmail(email: string, verificationToken: string) {
  const transporter = nodemailer.createTransport({
    // Configuración de Nodemailer
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
      user: 'anibal_d_quiroz@outlook.com',
      pass: 'cafeconleche1*'
    }
  });

  const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;

  await transporter.sendMail({
    from: 'anibal_d_quiroz@outlook.com',
    to: email,
    subject: 'Verifica tu cuenta',
    text: `Haz clic en el siguiente enlace para verificar tu cuenta: ${verificationLink}`
  });
}
