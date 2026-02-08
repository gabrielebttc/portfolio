This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Build the static file

1. Prepara Next.js per l'export statico
Apri il file next.config.ts (o .mjs) e assicurati che ci sia l'opzione output: 'export':

``` TypeScript
const nextConfig = {
  output: 'export', 
  // ... restanti opzioni
};

export default nextConfig;
```
2. Genera i file
Dalla cartella ~/portfolio/portfolio, esegui:

``` Bash
npm install
npm run build
```
Questo comando creerà una cartella chiamata out. Al suo interno troverai l' index.html e tutte le cartelle statiche (_next, static, ecc.).

3. Sposta i file in Nginx
Ora devi copiare il contenuto di out nella cartella che Nginx sta servendo:

``` Bash
sudo cp -r out/* /var/www/gabrielebuttice.com/
```

4. Verifica Nginx
Assicurati che i permessi siano corretti affinché Nginx possa leggere i file:

```Bash
sudo chown -R www-data:www-data /var/www/gabrielebuttice.com
```