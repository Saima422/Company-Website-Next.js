
# Company Website
A simple company application where based on the selected company card the user is routed to that company's website. The App makes API calls to a JSON file hosted on Github for Fetching Company Information.

## Introduction

A simple frontend for Company Website created with Next JS. Built with an aim to learn and implement creation of a NextJS Frontend, Routing and Server Side Rendering. Application supports functionalities of routing to various company pages.

## Getting Started

These are instructions to set up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) (which comes with npm) installed on your computer.

### Installation

From your command line:

1. Clone the repo
   ```sh
   $ git clone https://github.com/Saima422/Company-Website-Next.js.git
   ```
2. Install the Dependencies
   ```sh
   $ npm install
   ```
3. To start the App, use the following command
    ```sh
    $ npm run start
    ```
4. The Next.js Application is now Up and Running


## Folder Structure
```
.
├── components
│   ├── Banner
│   │   ├── Banner.jsx
│   │   └── Banner.module.scss
│   ├── Card
│   │   ├── Card.jsx
│   │   └── Card.module.scss
│   ├── Footer
│   │   ├── Footer.jsx
│   │   └── Footer.module.scss
│   └── Navbar
│       ├── Navbar.jsx
│       └── Navbar.module.scss
├── package.json
├── package-lock.json
├── pages
│   ├── _app.js
│   ├── contentstack.js
│   ├── index.js
│   ├── raweng.js
│   ├── styles
│   │   └── index.module.scss
│   └── surfboard.js
├── public
│   ├── favicon.ico
│   ├── logocomapny.png
│   └── vercel.svg
├── README.md
└── styles
    └── global.css

```
## Application View

* `/` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/company-website/company-home.png)

* `/raweng` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/company-website/raweng-home.png)

* `/contentstack` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/company-website/contentstack-home.png)

* `/surfboard` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/company-website/surfboard-home.png)


## Referred Resources
* [Next.js Docs](https://nextjs.org/docs)
* [Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-app)

## Contact

* Author - Saima Sayed 
* [Connect on LinkedIn](https://www.linkedin.com/in/saima-sayed-6482481b9/)
* [Project Resources](https://github.com/Saima422/Company-Website-Next.js)
* [Netlify Live Link](https://modest-bhabha-17d48a.netlify.app/)
* [Vercel Live Link](https://company-website-next-js-9k0ava2ph-saima422.vercel.app/)
