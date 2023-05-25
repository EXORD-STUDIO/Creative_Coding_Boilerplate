# Creative Coding Boilerplate

Built by [Fokarr](https://github.com/Fokarr) and used by [EXØRD](https://exord.de)

This repository contains a Creative Coding Boilerplate, which serves as a starting point for creating interactive and visually appealing projects using various creative coding frameworks and libraries. It provides a structured foundation and helpful utilities to simplify the development process.

## Features
Built-in Server: The boilerplate includes a simple development server to serve your creative coding projects locally.
Asset Management: The boilerplate offers a convenient way to manage your project's assets, such as images, fonts, and other resources.
Code Bundling: It utilizes [Vite.js](https://vitejs.dev/) as a bundling tool to combine and optimize your code, making it more efficient and easier to distribute.
Template System: The boilerplate incorporates a template engine called [handlebars](https://handlebarsjs.com/)
Smooth Scrolling: For Scrolling we use [studio-freight/lenis](https://lenis.studiofreight.com/). <- Thanks for the awesome library! :)
Page Transitions: [Barba.js](https://barba.js.org/) is initialized and working as intented.
Animations: For Animations the template uses [motion.dev](https://motion.dev/) since it is much smaller and has all the features you need. 

Getting Started
To get started with the Creative Coding Boilerplate, follow these steps:

Clone the repository to your local machine using the following command:

```
git clone https://github.com/EXORD-STUDIO/Creative_Coding_Boilerplate.git
```

Navigate to the project directory:

```
cd Creative_Coding_Boilerplate
```

Install the necessary dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

This will launch the development server and open your project in a web browser. I recommend using this repository as a template and start your project from there.

Project Structure
The structure of the Creative Coding Boilerplate is organized as follows:

```
├── app
│   ├── animations
│   ├── helper
│   ├── pages
│   └── main.js
├── assets
│   ├── fonts
│   ├── images
│   └── dist (your build folder)
├── src
│   ├── api
│   ├── views
│       ├── layouts
│       └── partials
├── styles
│   ├── pages
│   ├── partials
│   ├── utils
│   └── index.scss
├── .gitignore
├── package.json
├── webpack.config.js
└── ...
```

### app 
This directory contains all of the .js files which get bundled for the frontend. Such as pagetransition, animations or smoothscrolling files. The main.js is the entrypoint and will initialize everything.

### assets
This directory is used to store project assets, such as fonts, images, and other public resources.

### src
This directory contains the source code of your project. Such as API-Management (if you need one) and all of the template files in the views directory. The template engine which gets used is Handlebars.

### styles
styles: Holds stylesheets for styling your creative coding project in scss the index.scss is the entrypoint.


Feel free to modify the project structure as per your requirements and add additional files, directories, or libraries as needed.

#### Contributing
Contributions to the Creative Coding Boilerplate are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.
