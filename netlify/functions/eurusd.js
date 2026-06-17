exports.handler = async () => {
  try {
    // Get yesterday's date in YYYY-MM-DD
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${day}`;

    // Frankfurter API
    const url = `https://api.frankfurter.app/${dateStr}?from=EUR&to=USD`;

    const res = await fetch(url);
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
};
