export async function handler() {
  try {
    const res = await fetch("https://api.exchangerate.host/latest?base=EUR&symbols=USD");
    const json = await res.json();

    const rate = json.rates.USD;

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        open: rate,
        high: rate,
        low: rate,
        close: rate
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error fetching data"
    };
  }
}
