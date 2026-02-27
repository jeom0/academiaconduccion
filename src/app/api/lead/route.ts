import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      telefono,
      servicio,
      sede,
      mensaje
    } = body;

    await resend.emails.send({
      from: 'Leads Conduser <onboarding@resend.dev>', 
      to: process.env.LEADS_TO_EMAIL as string,
      subject: `Nuevo Lead - ${servicio}`,
      html: `
        <h2>Nuevo Lead recibido</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Sede:</strong> ${sede}</p>
        <p><strong>Mensaje:</strong> ${mensaje || 'No dejó mensaje'}</p>
        <hr/>
        <small>Enviado desde la web CONDUSER</small>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Lead enviado por correo correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error enviando correo:', error);

    return NextResponse.json(
      { success: false, message: 'Fallo al enviar el correo' },
      { status: 500 }
    );
  }
}