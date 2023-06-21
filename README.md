# Next.js Demo App

This repository is a simple Next.js application demonstrating various features of the Next.js framework. Here, you'll find examples of creating a Next.js app, file-based routing, nested routes, dynamic routes, showcasing the Link component, the Image component, API routes, a custom App component, prefetching, rendering techniques, data fetching methods, environment variables usage, and a custom 404 error page.

The showcase is related to the demo I gave at my talk, here's the [blog post](https://amadeustwi.dev/cra-dead-whats-next) and the [slides](https://drive.google.com/file/d/1r0-oQdg2Mz2MG-0f8FqZmpyxyFjchols/view), so you can get more context and cheat sheets on demo part. Have a look!

## Getting Started

To get a local copy up and running follow these simple steps.

1. Clone the repo

```sh
git clone https://github.com/AmadeusTwi/next-techtalk
```

2. Install NPM packages

```sh
npm install

or

pnpm install
```

3. Start the development server

```sh
npm run dev

or

pnpm run dev
```

Now you should be able to see the project running at localhost:3000.

## Showcase of Features

1. **Creating a New Next.js App**:
   We use `create-next-app` to initialize this application. This significantly simplifies the setup process, installing all the necessary dependencies, setting up a standard project structure, and providing a ready-to-start coding environment. This is already done as you clone the repo.

2. **File-Based Routing**:
   You will find multiple files within the `pages` directory. Next.js automatically creates routes based on these file names, simplifying the routing process. You can see this in action by navigating through different pages. Try create a new file in the `pages` directory and see how it's automatically added as a route!

3. **Nested Routes**:
   The app has nested routes, created by adding folders within the `pages` directory. This demonstrates complex routing structures and corresponds to URL segments. The structure of the `pages` directory mirrors the routing structure of the app. Have a look at `nested` and `nested/deep` directories.

4. **Dynamic Routes**:
   We use a file with square brackets (`[]`) in the name to demonstrate dynamic routes. Next.js uses the file name as a route parameter. You can see how we access these parameters within the page component. Take a look at `[bestThingInTheWorld].tsx` file. Depending on the route, the page will display a different message. Say, `locelhost:3000/nested/deep/nextjs` will display "The best thing in the world is... nextjs".

5. **Link Component**:
   The application uses the `Link` component from `next/link` for client-side navigation between pages. This avoids a full page reload, improving the performance of the application.

6. **Image Component**:
   The `next/image` component is used to load images. This component automatically optimizes images, which can significantly improve performance.

7. **API Routes**:
   You will find a simple API route within the `pages/api` directory. This route is called from a page. The `pages/api` directory is a full Node.js environment, so you can use code familiar to backend development. You can use them to mask your request to a third-party API. It's most convenient if you stick to Client-Side Rendering (CSR) and use the `fetch` API to call the API route (see `pages/csr.tsx` for example).

8. **Custom App Component**:
   A custom `_app.tsx` file has been created in the project. This file allows for adding global styles, managing global state, or modifying the layout across all pages. Though it's not used in this project in specific manner, it's a good practice to have it in your project.

9. **Prefetching**:
   Try `npm run build` and then `npm run start`. Then open your Network tab and hover your pointer at SSG links. You'll see that Next.js prefetches the data for these pages in the background. This improves the user experience by loading the page faster when the user clicks on the link.

10. **Rendering Methods**:
    I provided examples of each rendering method - CSR (Client-Side Rendering), SSR (Server-Side Rendering), ISR (Incremental Static Regeneration), and SSG (Static Site Generation). These methods offer flexibility in rendering pages depending on the use case. Here's how you can see them in action: leave a ⭐️ on [Next.js](https://github.com/vercel/next.js/) repo. Then do `npm run build`, `npm run start`. Have a look at each route and see how the number of stars changes. You'll see that the number of stars is different for each route. This is because the data is fetched at different times.

    - CSR: the number of stars is fetched on the client-side, so it's updated every time you visit the page. Notice that it blinks when you navigate to the page.
    - SSR: the number of stars is fetched on the server-side, so it's updated every time you visit the page. Notice that it doesn't blink when you navigate to the page, because the data is already there when the page is loaded (it loaded on the server-side).
    - SSG: the number of stars is fetched at build time, so it's updated every time you build the app. But it will stay the same, until you build the app again.
    - ISR: the number of stars is fetched at build time, but it's also updated every 180 seconds. Both SSG and ISR pages will have the same number of start at first, but ISR page will be updated every 180 seconds (take a look at `/pages/isr.tsx` and find `revalidate: 180`). You can see this in action by waiting for 180 seconds and then refreshing the page. You'll see that the number of stars is updated. This is because ISR pages data is invalidated every 180 seconds and the page is re-generated. This is a great way to keep your data up-to-date without having to rebuild the app every time.

11. **Data Fetching**:
    The project demonstrates the use of Next.js data fetching methods like `getStaticProps`, `getServerSideProps`, and `getInitialProps`. You can see when and how to use each one. I haven't touch of `getStaticPaths`, as this is a more advanced topic. You can learn more [here](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths).

12. **Environment Variables**:
    The project uses environment variables in Next.js, separating the development and production environments for better organization and security. Take a look at `.env.local`. Notice that you can prefix your environment variables with `NEXT_PUBLIC_` to make them available on the client-side. You can see this in action by navigating to the `404` page.

13. **Error Page**:
    We've created a custom 404 error page by adding a `404.tsx` file in the `pages` directory. This provides a more friendly error message to the users if they navigate to a non-existent page.

---

## Contributions

Contributions are welcome, though the app is sort of finished. If you have any suggestions or improvements, please create a pull request.
