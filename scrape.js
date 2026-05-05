const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const url = "https://fntd2.com/list";

  await page.goto(url, { waitUntil: "domcontentloaded" });

  await page.waitForTimeout(5000);

  const content = await page.content();

  console.log(content.slice(0, 500));

  await browser.close();
})();
