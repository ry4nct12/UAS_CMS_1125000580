export async function GET() {
  try {
    const response = await fetch("http://localhost:1337/api/bookings");

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();

    // ⚠️ WAJIB ada id (ID Strapi)
    if (!body.id) {
      return Response.json(
        { error: "Booking ID is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `http://localhost:1337/api/bookings/${body.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            customer_name: body.customer_name,
            customer_email: body.customer_email,
            booking_code: body.booking_code,
            booking_date: body.booking_date,
            total_price: Number(body.total_price),
            status_trx: body.status_trx,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const result = await response.json();
    return Response.json(result, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
