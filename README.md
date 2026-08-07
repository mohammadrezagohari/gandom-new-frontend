# وب‌سایت گندم

وب‌سایت چندزبانه گندم با Next.js 15، React، next-intl، Drizzle ORM و SQLite ساخته شده است. محتوای مقاله‌ها، اعضای تیم و متن‌های قابل‌مدیریت سایت از دیتابیس خوانده می‌شود و پنل مدیریت در مسیر `/panel/admin` قرار دارد.

## پیش‌نیازها

- Node.js نسخه 20 یا 22 (نسخه 22 LTS پیشنهاد می‌شود)
- npm
- Git
- ابزارهای build بومی برای `better-sqlite3`
- روی production: یک VPS لینوکس با دیسک دائمی، Nginx و PM2 یا systemd

## راه‌اندازی محیط توسعه

```bash
git clone YOUR_REPOSITORY_URL gandom
cd gandom
cp .env.example .env
npm ci
npm run db:migrate
npm run db:seed
npm run admin:create
npm run dev
```

سایت روی `http://localhost:3000` و پنل روی `http://localhost:3000/panel/admin/login` در دسترس است.

فایل `.env`:

```env
PORT=3000
DATABASE_PATH=./data/gandom.db
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NEXT_PUBLIC_SITE_URL` باید URL کامل origin باشد، بدون اسلش انتهایی. این مقدار منبع canonical، Open Graph، JSON-LD، sitemap و robots است. در production حتماً مقدار واقعی HTTPS مانند `https://gandom.link` را وارد کنید.

## دیتابیس، migration و seed

فایل اصلی SQLite به‌صورت پیش‌فرض در `data/gandom.db` است. migrationها داخل `drizzle/` نگهداری می‌شوند.

```bash
npm run db:generate   # پس از تغییر schema، migration جدید می‌سازد
npm run db:migrate    # migrationهای اجرا نشده را اعمال می‌کند
npm run db:studio     # فقط برای توسعه محلی
```

### محتوای seed

`scripts/seed-current-data.mjs` snapshot فعلی تمام داده‌های قابل استقرار را در خود دارد:

- ۷ عضو تیم
- ۹ مقاله
- ۱۴۹ رکورد محتوای سایت
- ۲ کامنت عمومی مقاله

برای جلوگیری از انتشار اطلاعات خصوصی، جدول‌های `Admin`، `AdminSession` و `FormSubmission` وارد seed نمی‌شوند و ایمیل کامنت‌ها در snapshot برابر `null` است. حساب ادمین باید جداگانه با `npm run admin:create` ساخته شود.

```bash
npm run db:seed
```

Seed با `ON CONFLICT DO NOTHING` اجرا می‌شود؛ بنابراین اجرای دوباره، محتوایی را که مدیر سایت ویرایش کرده بازنویسی نمی‌کند. Seed برای نصب اولیه است و در deployهای بعدی لازم نیست.

برای ساخت snapshot تازه از دیتابیس توسعه:

```bash
npm run db:seed:export
git diff -- scripts/seed-current-data.mjs
```

این فرمان فایل seed را بازتولید می‌کند. قبل از commit حتماً diff را بازبینی و سپس seed را روی یک دیتابیس خالی آزمایش کنید. snapshot را از دیتابیس production بدون بررسی وارد Git نکنید.

## SEO پیاده‌سازی‌شده

- عنوان و description اختصاصی فارسی و انگلیسی برای صفحات اصلی
- نرمال‌سازی Unicode، فاصله‌ها و حروف `ی/ک` در عنوان مقاله هنگام ذخیره و نمایش
- canonical مطلق برای هر صفحه
- hreflang برای `fa`، `en` و `x-default`
- Open Graph و Twitter Card
- metadata دیتابیس‌محور برای مقاله و عضو تیم
- JSON-LD از نوع `BlogPosting` برای مقاله و `Person` برای اعضای تیم
- `robots.txt` پویا و noindex برای پنل، API و صفحات آزمایشی/کم‌محتوا
- `sitemap.xml` دیتابیس‌محور برای مقاله‌های فعال و اعضای فعال تیم
- `lastModified` واقعی بر اساس `updatedAt`
- redirect دائمی مسیرهای قدیمی و بدون locale برای حذف محتوای تکراری
- noindex برای رکوردهای نامعتبر یا یافت‌نشده

فایل‌های اصلی SEO:

```text
src/lib/seo.js
src/lib/staticPageMetadata.js
src/app/sitemap.js
src/app/robots.js
src/components/seo/json-ld.jsx
```

پس از deploy این URLها را کنترل کنید:

```bash
curl -I https://gandom.link/en
curl -I https://gandom.link/fa
curl -I https://gandom.link/article
curl https://gandom.link/robots.txt
curl https://gandom.link/sitemap.xml
```

در source یک مقاله وجود title، description، canonical، hreflang، `og:*` و `application/ld+json` را بررسی کنید. سپس sitemap را در Google Search Console و Bing Webmaster Tools ثبت کنید. تغییر دامنه بدون اصلاح `NEXT_PUBLIC_SITE_URL` باعث تولید canonical اشتباه می‌شود.

## استقرار اولیه روی Ubuntu

### ۱. نصب ابزارها

```bash
sudo apt update
sudo apt install -y git nginx sqlite3 build-essential python3 make g++
```

Node.js 22 LTS را با روش مورد اعتماد خود نصب کنید و سپس:

```bash
sudo npm install -g pm2
```

### ۲. ساخت کاربر و دریافت پروژه

بهتر است برنامه با کاربر اختصاصی اجرا شود:

```bash
sudo useradd --system --create-home --shell /bin/bash gandom
sudo mkdir -p /var/www/gandom
sudo chown -R gandom:gandom /var/www/gandom
sudo -u gandom git clone YOUR_REPOSITORY_URL /var/www/gandom
cd /var/www/gandom
```

### ۳. مسیرهای دائمی و env

```bash
sudo -u gandom mkdir -p data public/uploads/team
sudo chmod 750 data public/uploads/team
sudo -u gandom nano .env
```

```env
PORT=3000
DATABASE_PATH=/var/www/gandom/data/gandom.db
NEXT_PUBLIC_SITE_URL=https://gandom.link
```

فایل دیتابیس و uploadها باید بین deployها باقی بمانند و کاربر `gandom` روی آن‌ها دسترسی نوشتن داشته باشد. فایل `.env` را commit نکنید.

### ۴. نصب، migration و نصب اولیه داده

```bash
sudo -u gandom npm ci
sudo -u gandom npm run db:migrate
sudo -u gandom npm run db:seed
sudo -u gandom npm run admin:create
sudo -u gandom npm run build
```

`db:seed` فقط در نصب اولیه اجرا شود. در به‌روزرسانی‌های عادی، محتوای production منبع اصلی است.

### ۵. اجرا با PM2

```bash
sudo -u gandom pm2 start npm --name gandom -- start
sudo -u gandom pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u gandom --hp /home/gandom
```

فرمانی را که `pm2 startup` نمایش می‌دهد اجرا کنید و وضعیت را ببینید:

```bash
sudo -u gandom pm2 status
sudo -u gandom pm2 logs gandom --lines 100
```

به‌دلیل استفاده از یک فایل SQLite، برنامه را فقط با یک instance و بدون cluster mode اجرا کنید.

## تنظیم Nginx و HTTPS

`/etc/nginx/sites-available/gandom`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name gandom.link www.gandom.link;

    client_max_body_size 6M;

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/gandom /etc/nginx/sites-enabled/gandom
sudo nginx -t
sudo systemctl reload nginx
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d gandom.link -d www.gandom.link
```

فقط یک hostname را canonical نگه دارید. اگر `gandom.link` canonical است، درخواست‌های `www` را با 301 به آن منتقل کنید و همان origin را در `NEXT_PUBLIC_SITE_URL` قرار دهید.

## روند به‌روزرسانی سرور

ابتدا backup بگیرید، سپس:

```bash
cd /var/www/gandom
sudo -u gandom git pull --ff-only
sudo -u gandom npm ci
sudo -u gandom npm run db:migrate
sudo -u gandom npm run build
sudo -u gandom pm2 reload gandom --update-env
sudo -u gandom pm2 logs gandom --lines 100
```

در deploy روزمره `db:seed` و `admin:create` را اجرا نکنید. اگر build شکست خورد، process فعلی را reload نکنید.

## backup و بازیابی

برای backup سازگار SQLite از دستور داخلی `.backup` استفاده کنید:

```bash
sudo mkdir -p /var/backups/gandom
sudo sqlite3 /var/www/gandom/data/gandom.db ".backup '/var/backups/gandom/gandom.db'"
sudo tar -czf /var/backups/gandom/team-uploads.tar.gz -C /var/www/gandom public/uploads/team
```

فایل‌های backup را با timestamp نگه دارید و یک نسخه را خارج از همان سرور ذخیره کنید. برای بازیابی:

```bash
sudo -u gandom pm2 stop gandom
sudo cp /path/to/backup.db /var/www/gandom/data/gandom.db
sudo chown gandom:gandom /var/www/gandom/data/gandom.db
sudo -u gandom npm run db:migrate
sudo -u gandom pm2 start gandom
```

## چک‌لیست هر release

```bash
npm ci
npm run db:migrate
npm run build
```

- diff migration و seed بازبینی شده باشد.
- از دیتابیس و uploadها backup معتبر وجود داشته باشد.
- `NEXT_PUBLIC_SITE_URL` با دامنه production یکی باشد.
- صفحه فارسی و انگلیسی، ورود مدیر و ثبت فرم آزمایش شوند.
- `robots.txt` و `sitemap.xml` پاسخ 200 بدهند.
- canonical یک مقاله و hreflangهای آن صحیح باشند.
- redirect مسیرهای بدون locale پاسخ 308/301 بدهد.
- sitemap در Search Console بدون URL پنل، API یا محتوای غیرفعال باشد.

## نکات امنیتی و عملیاتی

- `.env`، دیتابیس، sessionها و backupها را وارد Git نکنید.
- Drizzle Studio را روی اینترنت عمومی باز نکنید.
- دسترسی نوشتن فقط برای `data` و `public/uploads/team` لازم است.
- حساب مدیر را با رمز قوی و منحصربه‌فرد بسازید.
- SQLite برای یک instance مناسب است؛ برای چند instance یا ترافیک نوشتن بالا به PostgreSQL مهاجرت کنید.
- نسخه فعلی به filesystem دائمی نیاز دارد و بدون انتقال دیتابیس و uploadها به سرویس‌های پایدار، مناسب Vercel/serverless نیست.

## دستورات مهم

```bash
npm run dev
npm run build
npm run start
npm run db:migrate
npm run db:seed
npm run db:seed:export
npm run db:generate
npm run db:studio
npm run admin:create
```
