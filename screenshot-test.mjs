import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE   = 'http://localhost:3000';
const OUT    = './screenshots';

const viewports = [
  { name: 'mobile-375',  width: 375,  height: 812 },
  { name: 'tablet-768',  width: 768,  height: 1024 },
  { name: 'desktop-1280', width: 1280, height: 900 },
];

const pages = [
  { path: '/',             label: 'home' },
  { path: '/about',        label: 'about' },
  { path: '/services',     label: 'services' },
  { path: '/contact',      label: 'contact' },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME, headless: true });

for (const vp of viewports) {
  const ctx  = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  for (const pg of pages) {
    await page.goto(BASE + pg.path, { waitUntil: 'networkidle', timeout: 15000 });
    await page.screenshot({ path: `${OUT}/${vp.name}-${pg.label}.png`, fullPage: true });
    console.log(`✓ ${vp.name} / ${pg.label}`);
  }
  await ctx.close();
}

await browser.close();
console.log('Done — screenshots in ./screenshots/');
