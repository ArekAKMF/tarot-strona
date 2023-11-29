// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import puppeteer from "puppeteer-core";
// // import puppeteer from 'puppeteer';

// // import bypass from './captcha/captchaBypasser.js';

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// // import puppeteer from "puppeteer-extra";
// // import hidden from "puppeteer-extra-plugin-stealth";

// // require executablePath from puppeteer
// // const { executablePath } = require("puppeteer");

// type Json = {
//   message: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Json | Buffer>
// ) {
//   console.log(req.body, "REQ");

//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate the page to a URL
//   await page.goto("https://developer.chrome.com/");

//   // Set screen size
//   await page.setViewport({ width: 1080, height: 1024 });

//   // Type into search box
//   await page.type(".search-box__input", "automate beyond recorder");

//   // Wait and click on first result
//   const searchResultSelector = ".search-box__link";
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     "text/Customize and automate"
//   );
//   const fullTitle = await textSelector?.evaluate((el) => el.textContent);

//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();

//   // const { searchParams } = new URL(
//   //   req.url as string,
//   //   `http://${req.headers.host}`
//   // );
//   // const url = searchParams.get("url");

//   // if (!url) {
//   //   return res
//   //     .status(400)
//   //     .json({ message: `A ?url query-parameter is required` });
//   // }

//   // const browser = await puppeteer.connect({
//   //   browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
//   // });

//   // const page = await browser.newPage();
//   // await page.setViewport({ width: 1920, height: 1080 });
//   // await page.goto(url);

//   // return res.status(200).send(await page.pdf());
// }
