# وب‌سایت گندم

پروژه با Next.js 15، Drizzle ORM و MariaDB اجرا می‌شود. دیتابیس runtime دیگر SQLite نیست؛ اتصال برنامه از طریق pool درایور `mysql2` انجام می‌شود و migrationها در `drizzle-mariadb/` نگهداری می‌شوند.

## پیش‌نیازها

- Node.js 22 و npm
- MariaDB 11.4 یا نسخه جدیدتر سازگار
- دسترسی به یک دیتابیس و کاربر MariaDB با مجوزهای همان دیتابیس
- برای تست integration: Docker و Docker Compose (اختیاری)

## راه‌اندازی محیط توسعه

```bash
npm ci
cp .env.example .env
```

یک دیتابیس محلی بسازید:

```sql
CREATE DATABASE gandomdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'gandomdb'@'localhost' IDENTIFIED BY 'A_STRONG_LOCAL_PASSWORD';
GRANT ALL PRIVILEGES ON gandomdb.* TO 'gandomdb'@'localhost';
FLUSH PRIVILEGES;
```

مشخصات اتصال را با متغیرهای `DB_*` در `.env` تنظیم کنید.

```dotenv
PORT=3000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gandomdb
DB_USERNAME=gandomdb
DB_PASSWORD=A_STRONG_LOCAL_PASSWORD
DATABASE_POOL_SIZE=10
NEXT_PUBLIC_SITE_URL=https://gandom.link
```

`DB_HOST`، `DB_DATABASE` و `DB_USERNAME` الزامی هستند. مقدار پیش‌فرض `DB_CONNECTION` برابر `mysql` و مقدار پیش‌فرض `DB_PORT` برابر `3306` است؛ رمز عبور نیز می‌تواند خالی باشد. وقتی متغیرهای `DB_*` تنظیم شده باشند، برنامه، Drizzle CLI و اسکریپت migration همگی از همین مقادیر استفاده می‌کنند و نیازی به `DATABASE_URL` نیست.

سپس schema، داده اولیه و برنامه را اجرا کنید:

```bash
npm run db:migrate
npm run db:seed
npm run dev
```

ساخت یا به‌روزرسانی مدیر:

```bash
npm run admin:create -- admin 'A_STRONG_ADMIN_PASSWORD'
```

## ساختار دیتابیس و queryها

- schema در `src/db/schema.mjs` با `mysqlTable` تعریف شده است.
- pool اتصال در `src/db/index.mjs` ساخته و در development بین hot reloadها reuse می‌شود.
- تمام queryهای برنامه async هستند و باید `await` شوند.
- برای شناسه رکورد تازه از `$returningId()` استفاده می‌شود؛ MariaDB/MySQL روی `INSERT`، `RETURNING` عمومی مشابه PostgreSQL ندارند.
- همه جدول‌های متنی در migration اولیه به `utf8mb4_unicode_ci` تبدیل می‌شوند تا فارسی و emoji سالم ذخیره شوند.
- زمان اتصال روی UTC تنظیم شده است؛ نمایش زمان باید در لایه رابط کاربری locale-aware باشد.

دستورات دیتابیس:

```bash
npm run db:generate   # ساخت migration پس از تغییر schema
npm run db:migrate    # اعمال migrationهای ثبت‌نشده
npm run db:studio     # رابط Drizzle Studio
npm run db:seed       # seed idempotent محتوای فعلی
npm run db:seed:export
```

seed اصلی در `scripts/seed-current-data.mjs` است و اطلاعات تیم، مقاله‌ها، محتوای سایت و دیدگاه‌های عمومی را وارد می‌کند. اطلاعات حساس مدیران، نشست‌ها و فرم‌های کاربران عمداً داخل seed عمومی export نمی‌شوند. اجرای چندباره seed رکورد تکراری تولید نمی‌کند.

## انتقال همه داده‌های SQLite فعلی به MariaDB

اسکریپت انتقال، هر هفت جدول `Admin`، `AdminSession`، `FormSubmission`، `ArticleComment`، `TeamMember`، `Article` و `SiteContent` را با IDهای فعلی کپی می‌کند. بنابراین hash رمز مدیر و داده‌های خصوصی فرم‌ها نیز منتقل می‌شوند؛ فایل و log خروجی را محرمانه نگه دارید.

1. قبل از هر کاری از SQLite نسخه پشتیبان بگیرید و برنامه قدیمی را موقتاً در maintenance قرار دهید تا حین انتقال write جدیدی ثبت نشود.
2. متغیرهای `DB_CONNECTION`، `DB_HOST`، `DB_PORT`، `DB_DATABASE`، `DB_USERNAME` و `DB_PASSWORD` را برای MariaDB مقصد تنظیم کنید.
3. مقصد باید خالی باشد؛ ابتدا فقط migration را اجرا کنید.
4. اسکریپت انتقال را با مسیر فایل قدیمی اجرا کنید.

```bash
npm run db:migrate
npm run db:sqlite-to-mariadb -- --sqlite=/absolute/path/to/gandom.db
```

در ویندوز:

```powershell
npm run db:sqlite-to-mariadb -- --sqlite=D:\backup\gandom.db
```

برای جلوگیری از merge ناقص، انتقال داخل transaction انجام می‌شود و اگر هر جدول مقصد داده داشته باشد متوقف می‌شود. پس از موفقیت، تعداد رکوردهای هر جدول چاپ می‌شود. تعدادها را مستقل نیز بررسی کنید:

```sql
SELECT 'Admin' AS table_name, COUNT(*) AS total FROM Admin
UNION ALL SELECT 'AdminSession', COUNT(*) FROM AdminSession
UNION ALL SELECT 'FormSubmission', COUNT(*) FROM FormSubmission
UNION ALL SELECT 'ArticleComment', COUNT(*) FROM ArticleComment
UNION ALL SELECT 'TeamMember', COUNT(*) FROM TeamMember
UNION ALL SELECT 'Article', COUNT(*) FROM Article
UNION ALL SELECT 'SiteContent', COUNT(*) FROM SiteContent;
```

بعد از smoke test ورود مدیر، ارسال فرم، مقاله‌ها، تیم و sitemap، فایل SQLite را فوراً حذف نکنید؛ آن را به‌صورت رمزنگاری‌شده تا پایان دوره rollback نگه دارید.

## تست‌ها

تست‌های واحد، انتخاب driver/schema، migration و تنظیم `utf8mb4` را بررسی می‌کنند. تست integration روی MariaDB واقعی، migration، CRUD، فارسی، emoji، boolean، `$returningId()` و unique constraint را می‌سنجد.

```bash
npm test
```

برای تست MariaDB واقعی با Docker:

```bash
npm run test:db:up
npm run test:db
npm run test:db:down
```

سرویس تست روی پورت `33307` و دیتابیس موقت `gandom_test` بالا می‌آید. تست برای ایمنی فقط URL دیتابیسی را قبول می‌کند که نام آن به `_test` ختم شود. برای سرور تست اختصاصی می‌توانید `TEST_DATABASE_URL` را خودتان تعیین کنید.

## SEO و sitemap

- metadata، canonical و `hreflang` برای صفحات فارسی و انگلیسی تولید می‌شوند.
- title و descriptionها قبل از خروجی نرمال می‌شوند تا فاصله، طول و پسوند برند کنترل شود.
- JSON-LD سازمان، وب‌سایت، breadcrumb، مقاله و پروفایل اعضای تیم در صفحات مرتبط وجود دارد.
- robots در `/robots.txt` در دسترس است و مسیرهای مدیریت و API را crawl نمی‌کند.
- sitemap دیتابیس‌محور در آدرس `/sitemap.xml` است؛ URL مقاله‌های فعال و اعضای فعال تیم را از MariaDB می‌خواند و برای هر دو locale خروجی می‌دهد.
- فایل `public/sitemap.xsl` فقط نمایش انسانی XML را زیباتر می‌کند و در پردازش موتور جست‌وجو دخالتی ندارد. خود endpoint همچنان XML استاندارد برمی‌گرداند.

آدرس production:

```text
https://gandom.link/sitemap.xml
```

بعد از deploy، این دو آدرس را باز کنید و sitemap را در Google Search Console و Bing Webmaster Tools ثبت کنید:

```text
https://gandom.link/robots.txt
https://gandom.link/sitemap.xml
```

مقدار `NEXT_PUBLIC_SITE_URL` باید دقیقاً origin نهایی و بدون slash انتهایی باشد؛ در غیر این صورت canonical و URLهای sitemap اشتباه می‌شوند.

## استقرار روی Ubuntu

### ۱. نصب سرویس‌ها

Node.js 22، Nginx، Git، MariaDB Server و PM2 را نصب کنید. سپس MariaDB را امن‌سازی کنید:

```bash
sudo apt update
sudo apt install -y git nginx mariadb-server
sudo mariadb-secure-installation
sudo systemctl enable --now mariadb nginx
sudo npm install -g pm2
```

Node.js را با روش استاندارد تیم/سرور نصب کنید و نسخه‌ها را کنترل کنید:

```bash
node --version
npm --version
mariadb --version
```

### ۲. ساخت دیتابیس production

```bash
sudo mariadb
```

```sql
CREATE DATABASE gandom CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'gandom_app'@'127.0.0.1' IDENTIFIED BY 'A_LONG_RANDOM_PASSWORD';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, INDEX, DROP, REFERENCES ON gandom.* TO 'gandom_app'@'127.0.0.1';
FLUSH PRIVILEGES;
```

برای اصل least privilege می‌توان کاربر migration را از کاربر runtime جدا کرد؛ در آن حالت کاربر runtime فقط `SELECT, INSERT, UPDATE, DELETE` لازم دارد.

### ۳. دریافت پروژه و env

```bash
sudo mkdir -p /var/www/gandom
sudo chown -R "$USER":"$USER" /var/www/gandom
git clone YOUR_REPOSITORY_URL /var/www/gandom/app
cd /var/www/gandom/app
cp .env.example .env
chmod 600 .env
```

`.env` production:

```dotenv
PORT=3000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gandom
DB_USERNAME=gandom_app
DB_PASSWORD=A_STRONG_PRODUCTION_PASSWORD
DATABASE_POOL_SIZE=10
NEXT_PUBLIC_SITE_URL=https://gandom.link
```

فایل `.env`، dumpها و دیتابیس قدیمی نباید commit شوند.

### ۴. نصب، migration، build و اجرا

```bash
cd /var/www/gandom/app
npm ci
npm run db:migrate
npm run db:seed
npm run build
pm2 start npm --name gandom -- start
pm2 save
pm2 startup
```

دستور نهایی چاپ‌شده توسط `pm2 startup` را یک‌بار با sudo اجرا کنید. `db:seed` در deployهای معمول اختیاری است و فقط وقتی snapshot محتوای repository باید وارد شود اجرا می‌شود.

### ۵. Nginx و HTTPS

نمونه upstream:

```nginx
server {
    listen 80;
    server_name gandom.link www.gandom.link;

    client_max_body_size 20m;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

پس از فعال‌سازی config، با Certbot گواهی HTTPS بگیرید و redirect از HTTP به HTTPS را فعال کنید. سپس canonical، robots و sitemap را روی دامنه نهایی دوباره تست کنید.

## روند به‌روزرسانی سرور

قبل از migration از دیتابیس backup بگیرید. ترتیب امن release:

```bash
cd /var/www/gandom/app
git pull --ff-only
npm ci
npm run db:migrate
npm run build
pm2 reload gandom --update-env
pm2 status
pm2 logs gandom --lines 100
```

Migration باید backward-compatible طراحی شود: ابتدا ستون/جدول جدید اضافه شود، سپس کد deploy شود و حذف ساختار قدیمی به release بعدی موکول شود. اجرای مستقیم `db:push` در production توصیه نمی‌شود؛ migrationهای versioned را commit و review کنید.

## backup و بازیابی MariaDB

نمونه backup روزانه:

```bash
sudo install -d -m 700 /var/backups/gandom
mariadb-dump --single-transaction --routines --triggers --events gandom | gzip > /var/backups/gandom/gandom-$(date +%F-%H%M).sql.gz
```

بازیابی را اول روی دیتابیس جداگانه تمرین کنید:

```bash
gunzip -c /var/backups/gandom/BACKUP.sql.gz | mariadb gandom_restore_test
```

صرف وجود فایل backup کافی نیست؛ restore دوره‌ای، retention، رمزنگاری و کپی خارج از همان سرور باید بررسی شود. پوشه uploadها نیز جداگانه backup شود چون داخل MariaDB نیست.

## چک‌لیست release

- `npm test` و در تغییرات دیتابیس `npm run test:db` موفق باشد.
- migration قبل از build production روی staging اجرا شده باشد.
- backup تازه و قابل restore وجود داشته باشد.
- صفحه اصلی، ورود مدیر، فرم‌ها، مقاله و تیم smoke test شوند.
- `/robots.txt` و `/sitemap.xml` با دامنه صحیح پاسخ 200 بدهند.
- canonical و hreflang چند صفحه فارسی و انگلیسی بررسی شوند.
- log برنامه و slow queryهای MariaDB بررسی شوند.
- secretها، dump، SQLite قدیمی و `.env` داخل Git یا web root عمومی نباشند.

## دستورات مهم

```bash
npm run dev
npm run build
npm start
npm test
npm run test:db
npm run db:generate
npm run db:migrate
npm run db:seed
npm run db:sqlite-to-mariadb -- --sqlite=/path/to/gandom.db
npm run admin:create -- USERNAME PASSWORD
```
