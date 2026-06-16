export default async () => {
  try {
    const res = await fetch("https://api.exchangerate.host/latest?base=EUR&symbols=USD");
    const json = await res.json();

    const rate = json.rates.USD;

    const body = JSON.stringify({
      open: rate,
      high: rate,
      low: rate,
      close: rate
    });

    return new Response(body, {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" }
    });

  } catch (err) {
    return new Response("Error fetching data", { status: 500 });
  }
};
