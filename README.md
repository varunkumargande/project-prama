Tools Used
□ NextJS as framework
○ Vercel for hosting (https://project-prama-varunkumargande.vercel.app/)
○ Prismic as CMS
○ Github as repository ( https://github.com/varunkumargande/project-prama )
○ AWS Lamda function for simple contact form

Please design, develop, and host a static site consisting of 3 pages - a home page, a contact us page, and a
privacy policy page. The pages will be composed of 3 reusable modules:
•
○ A hero module consisting of an image background with text overlaid on top
A rich text module containing heading text (H1, H2, etc) and paragraphs of body copy. The rich text module may
appear multiple times on a page.
○
A form which will collect name and email address. The data can be saved using a form-as-a-service API
integration, serverless functions, etc.
○
The content (text and images) must be editable from within a headless CMS. Either GraphQL or REST APIs may be
used to retrieve content from the CMS.
•
There are no right/wrong ways to implement this. The UI/design can be minimal using any frameworks you are
familiar with or custom code as desired.
•
• Use only free plans or tiers of any services used.
Your solution should be provided as a marked up file and delivered in a Zip file. Please do not use a public Github
link.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
