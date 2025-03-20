import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data;
}

// Exporta el manejador para el método GET
export async function GET() {
  try {
    const invoices = await listInvoices();
    return new Response(JSON.stringify(invoices), { status: 200 });
   } 
   catch (error: unknown) {
      return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
}
