import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Aquí iría la lógica para guardar en base de datos o enviar a CRM
        // Ejemplo: conectar con n8n, Salesforce, Hubspot, etc.

        console.log('Lead recibido:', body);

        return NextResponse.json({ success: true, message: 'Lead registrado exitosamente' }, { status: 200 });
    } catch (error) {
        console.error('Error processando lead:', error);
        return NextResponse.json({ success: false, message: 'Fallo al procesar solicitud' }, { status: 500 });
    }
}
