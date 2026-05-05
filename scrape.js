const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const url = "https://fntd2.com/list";

  page.on("response", async (response) => {
    const url = response.url();

    if (url.includes("list") || url.includes("api")) {
      try {
        const text = await response.text();
        if (text.length > 100) {
          console.log("\n📡 API Response from:", url);
          console.log(text.slice(0, 500));
        }
      } catch {}
    }
  });

  await page.goto(url, { waitUntil: "networkidle" });

  await page.waitForTimeout(5000);

  await browser.close();
})();
