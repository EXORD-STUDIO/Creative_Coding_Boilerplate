# Creative Coding Boilerplate

Built by [Fokarr](https://github.com/Fokarr) and used by [EXØRD](https://exord.de)

This repository contains a Creative Coding Boilerplate, which serves as a starting point for creating interactive and visually appealing projects using various creative coding frameworks and libraries. It provides a structured foundation and helpful utilities to simplify the development process.

Features
Built-in Server: The boilerplate includes a simple development server to serve your creative coding projects locally.
Hot Reloading: Any changes you make to your code will automatically trigger a browser refresh, allowing you to see the updates in real-time.
Asset Management: The boilerplate offers a convenient way to manage your project's assets, such as images, fonts, and other resources.
Code Bundling: It utilizes a bundling tool to combine and optimize your code, making it more efficient and easier to distribute.
Template System: The boilerplate incorporates a template system that enables you to create reusable components for your creative coding projects.
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
npm start
```

This will launch the development server and open your project in a web browser.

Project Structure
The structure of the Creative Coding Boilerplate is organized as follows:

lua
Copy code
.
├── assets
│   ├── fonts
│   ├── images
│   └── ...
├── src
│   ├── components
│   ├── styles
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── webpack.config.js
└── ...
assets: This directory is used to store project assets, such as fonts, images, and other resources.
fonts: Contains font files used in the project.
images: Contains image files used in the project.
...: Other resource files can be placed in appropriate subdirectories.
src: This directory contains the source code of your creative coding project.
components: Stores reusable components that can be used across different parts of your project.
styles: Holds stylesheets for styling your creative coding project.
index.js: The entry point of your project where you can import and use your components and styles.
...: Additional files and directories related to your project can be added here.
.gitignore: Specifies files and directories that should be ignored by Git version control.
package.json: Configuration file for managing project dependencies and scripts.
webpack.config.js: Configuration file for the webpack bundler, specifying how the project should be bundled and processed.
Feel free to modify the project structure as per your requirements and add additional files, directories, or libraries as needed.

Contributing
Contributions to the Creative Coding Boilerplate are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.
