# Create T3 App
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

1. Install dependencies: `pnpm install` (pnpm was used as package manager)
2. Run the development server: `pnpm run dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser

# Create T3 App
1. BLOB_READ_WRITE_TOKEN był używany do wysyłania zdjęć do Vercel Blob Storage.
2. SENDGRID_API_KEY był używany do wysyłania emaili.
3. SENDGRID_TEMPLATE_ID był używany do wysyłania emaili.
4. SENDGRID_EMAIL_TO był używany do wysyłania emaili.
5. DATABASE_URL był używany do połączenia z bazą danych.a
6. Aplikacja korzystała z Vercel Postgres. Można podpiąć każdą inną bazę danych PostgreSQL. Dokumentacja: https://orm.drizzle.team/docs/get-started/postgresql-new (dla PostgreSQL) i https://orm.drizzle.team/docs/get-started/vercel-new (dla Vercel Postgres). Można podpiąć mySQL, sqlite etc. Wszystko będzie w dokumentacji drizzle.
7. Aplikacja korzysta z @t3-oss/env-nextjs - żeby dodać nowe zmienne środowiskowe, trzeba dodać je do pliku .env.js.

----------------------od kuby-----------------------------------------------------------
# Dodałem komponent do wyrównania sekcji section.tsx w components/ui
# Zsynchronizuj [locale] -> layout 
1. pozaciągałem więcej do NextIntlClientProvider, 
2. page.tsx porozbijałem na komponenty które są w src/app/_components. 
3. W page.tsx zostawiłem część od formularza. Pozmieniałem tylko minimalnie tailwinda żeby wszystko było w jednym stylu. 

# Dodałem ui komponent do wyrównania sekcji section.tsx w components/ui 

# Zsynchronizuj sobie tailwind.config oraz package.json bo pozaciągałem troche nowych paczek takich np. jak framermotion itd

# Nie zapomnij o public oraz messages, bo zostały dodane dodatkowe svg, webp oraz pozmieniane teksty.
Bazowałem na starym projekcie, nie zmieniałem nic w backu. 

Pozdrawiam, 

---------------------------------------------------------------------------------
# formularz wyłączony w page tsx commentem