export async function GET() {
  try {
    const response = await fetch("http://localhost:1337/api/bookings", {
      headers: {
        "Authorization": `Bearer ${process.env.STRAPI_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}