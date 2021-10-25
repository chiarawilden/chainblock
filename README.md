# ChainBlock Technical Documentation SPA ✍🏽

I created this SPA to practice working with React. As programmers, we spend so much time in documentation, quality of writing, ease-of-use, and aesthetic sensibility are all key to a pleasant experience 🌷 I thought it'd be a good exercise to architect my own docs app, using a modular approach, with these considerations in mind.

What I didn't anticipate, was how difficult it would be to finally deploy the app after I finished 🤦🏽‍♀️ It took a solid 24 hours of painstaking searching and testing for me to solve a problem I was having with my Nginx server. (Definitely lost some hair from that..) Finally cracking the problem though, felt amazing 💪🏽😁 and I learned so much. 

I'm fairly happy with how the UI turned out, though perhaps the card components could use some tweaking. I chose to use CSS variables for most colors, making it easy to implement different themes in the future 🎨  

All dummy text contained within the first couple pages is taken from [this Wikipedia page on Blockchain technology](https://en.wikipedia.org/wiki/Blockchain). The remaining pages are filled with Lorem Ipsum (the sidebar links are all dummy text as well).  

Here's the final result:  
&nbsp;  

![ChainBlock Homepage](/readme/final-result.png)  
&nbsp;  

**TLDR:**  


## Goal 🏅

Create a technical documentation SPA which uses React components to populate page and sidebar content.  
&nbsp;  


## How to Navigate this App

The ```src``` for this project contains a folder named ```components``` for smaller "in-page" components, as well as a ```pages``` folder for "full page" components. The full page components are to be injected into the app's main content area.   

All in-page components are contained in their own folder, along with a CSS stylesheet. (I chose to use vanilla CSS for this app.) The full page components do not have their own individual stylesheets, but instead inheret styles from ```page.css``` located in the root of the ```pages``` folder.  

Also located in the root of the ```pages``` folder, is the ```Home.jsx``` or "index" page component, and a ```Layout.jsx``` component for creating new pages. The remaining pages are further organized into folders, based on their placement in the sidebar.

The ```src``` folder also contains your standard ```App.js``` and ```index.js``` files and a global stylesheet. The ```public``` folder contains the ```index.html``` page and favicon.

The command to run this app after installing all packages, is  ```npm start```.  
&nbsp;  


## Areas for Improvement

### Architecture
I spent a lot of time thinking about which areas to modularize and why 💭 The more I program, the more I notice myself developing certain preferences, in terms of app structure and modularization.  

I personally prefer keeping more content within components, rather than creating structures of increasingly granular nested components. In the latter case, I find myself constantly worrying about imports/exports, changing files paths, and frantically clicking around in my text editor while React is yelling at me about a lowercase letter *somewhere* that should be uppercase 🤯 

I think this is why I've developed an affinity for Svelte. (I believe Shopify is also starting to implement this sort of structure in Liquid). I really enjoy how Svelte allows you to easily implement HTML, CSS and JS all in one file 🙌🏽 You can create a similar effect in React using [styled components](https://npm.io/package/styled-components), but Svelte does it cleaner. It's also nice that this feature comes out of the box, with syntax highlighting included 👌🏽   

I do see though how more granular architectures might benefit large teams working on projects with many, many features and stages of development, by preventing excess merge conflicts 🤝  

*All that being said*, I ulimately decided to make components out of the areas which would seemingly benefit most from them, including the side bar and page links, card components, and main pages. Most content is placed directly in each page component.  

I'm happy with this setup, though I wonder if it might be better to import data for the largest components from JSON files. The pages can get quite long, so perhaps that would be an improvement.  
&nbsp;  

### Search Filter

I created a search field for the project, but haven't yet figured out to implement app-wide content search. This is another reason why I think it'd be a good idea to create JSON files with all page content.  

In an ✨ideal world✨ the app would include search through a modal, similiar to what Digital Ocean currently has:  
&nbsp;  

![Digital Ocean Search Modal](/readme/digital-ocean-search-modal.png)
&nbsp;  

### Snippets Component

I created a ```Snippets.jsx``` component for code blocks, which must still be programmed to accept and deliver code literally. (I tried experimenting with the ```<pre>``` and ```<code>``` tags, but couldn't get them to work 😞).  
&nbsp;  

### Responsiveness

The app is not yet responsive!  
&nbsp;  


## Live Demo
&nbsp;  
