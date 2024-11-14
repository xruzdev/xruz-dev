"use server";
import nodemailer from "nodemailer";
import { mailState } from "./interface";

export async function sendMail(form: FormData): Promise<mailState> {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASSWORD_MAIL,
    },
  });
  const info = await transporter.sendMail({
    from: form.get("email")?.toString(),
    to: "xruzdev@gmail.com",
    subject: `Mensaje de ${form.get("name")}`,
    text: form.get("message")?.toString(),
    html: `
    <h1>Mensaje de ${form.get("name")}</h1>
  <ol> 
    <li>Nombre: ${form.get("name")}</li>
    <li>Email: ${form.get("email")}</li>
    <li>Compañía: ${form.get("company")}</li>
    <li>Mensaje: ${form.get("message")}</li>

  </ol>
    `,
  });

  try {
    await transporter.sendMail(info);

    return {
      error: false,
      message: "Mail enviado, gracias por contactarme.",
    };

  } catch (e) {

    console.error(e);
    
    return {
      error: true,
      message: "Error al enviar el mail, intente nuevamente.",
    };
  }
}
