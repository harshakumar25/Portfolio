
# 🛡️ Harsh Kumar - Cybersecurity Portfolio

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Tech Stack](https://img.shields.io/badge/HTML5-CSS3-JavaScript-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, interactive portfolio website for a cybersecurity student showcasing skills in web development, DevOps, and security technologies. Built with pure HTML, CSS, and JavaScript featuring smooth animations, responsive design, and interactive elements.

## 🎯 **What This Project Is**

This is a professional portfolio website designed to:
- Showcase cybersecurity and development skills
- Present projects and contributions in an engaging way
- Demonstrate proficiency in modern web technologies
- Serve as a digital resume for potential employers and collaborators

**Key Features:**
- ✅ Modern glass-morphism design with dark theme
- ✅ Fully responsive across all devices
- ✅ Interactive animations and micro-interactions
- ✅ Performance-optimized with lazy loading
- ✅ Accessible navigation and UI components
- ✅ Form simulation with feedback
- ✅ Tilt effects on project cards
- ✅ Animated counters and progress bars
- ✅ Typing animation for hero section

## 🚀 **Why This Project Exists**

### **Problem Statement:**
Traditional resumes and portfolios often fail to:
- Visually demonstrate technical skills effectively
- Provide interactive engagement for visitors
- Showcase animations and UI/UX capabilities
- Adapt seamlessly across all device sizes

### **Solution:**
This portfolio addresses these gaps by:
1. **Visual Skill Demonstration** - Animated progress bars and counters
2. **Interactive Engagement** - Hover effects, parallax, and form interactions
3. **Modern Design** - Glass-morphism, gradients, and smooth transitions
4. **Performance Focus** - Optimized loading and smooth animations
5. **Mobile-First Approach** - Perfect experience on any device

## 🏗️ **How to Build/Run**

### **Prerequisites**
- Web browser (Chrome 80+, Firefox 75+, Safari 13+)
- Text editor (VS Code recommended)
- Git (for version control)

### **Quick Start (Local Development)**

1. **Clone the repository**


git clone https://github.com/yourusername/cybersecurity-portfolio.git
cd cybersecurity-portfolio
Open directly in browser

# Simply open index.html in your browser
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
Using Live Server (VS Code)

Install "Live Server" extension in VS Code

Right-click on index.html → "Open with Live Server"

Server starts at http://localhost:5500

File Structure
text
portfolio/
├── index.html          # Main HTML file
├── style.css           # All CSS styles (inline in current setup)
├── script.js           # All JavaScript (inline in current setup)
└── README.md           # This documentation
Production Deployment
Option 1: GitHub Pages (Free)

# 1. Create a new repository on GitHub
# 2. Push your code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main

# 3. Go to repository Settings → Pages
# 4. Select source branch (main) and save
# 5. Your site will be at: https://yourusername.github.io/repository-name/
Option 2: Netlify (Free)
Drag and drop your project folder to Netlify Drop

Or connect your GitHub repository via Netlify dashboard

Automatic deployments on push

Option 3: Vercel (Free)
bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
🤝 How to Contribute
We welcome contributions! Here's how you can help improve this portfolio:

For Beginners (First Time Contributors)
Fork the repository

Click "Fork" button at top-right of GitHub repository

Clone your fork

bash
git clone https://github.com/yourusername/cybersecurity-portfolio.git
Create a feature branch

bash
git checkout -b feature/amazing-improvement
Contribution Areas
Bug Fixes
markdown
**Report Bugs:**
1. Use GitHub Issues template
2. Include: Browser, OS, steps to reproduce, expected vs actual behavior

**Fix Bugs:**
1. Comment on the issue you want to fix
2. Create PR with:
   - Test case demonstrating fix
   - Before/after screenshots if UI-related
New Features
javascript
// Example: Adding dark/light mode toggle
// 1. Add toggle button in HTML
// 2. Create CSS variables for light theme
// 3. Implement toggle logic in JavaScript
Documentation Improvements
Fix typos and grammatical errors

Add comments to complex code sections

Create additional setup guides

Translate documentation to other languages

Pull Request Process
Update the README.md with details of changes

Add comments for new functions or complex logic

Test thoroughly on multiple browsers

Ensure no console errors

Follow the existing code style

bash
# Example workflow
git add .
git commit -m "feat: add dark mode toggle"
git push origin feature/amazing-improvement
# Then create Pull Request on GitHub
Code Style Guidelines
HTML
Use semantic HTML5 elements

Add alt text to images

Maintain proper indentation (2 spaces)

Close all tags properly

CSS
Use CSS variables (as shown in :root)

Follow BEM naming convention for complex projects

Mobile-first responsive design

Comment complex animations

JavaScript
Use ES6+ features

Add JSDoc comments for functions

Handle errors gracefully

Optimize performance (debounce scroll events, etc.)

Project Roadmap
markdown
## Upcoming Features
- [ ] Dark/Light mode toggle
- [ ] PDF resume download
- [ ] Blog integration
- [ ] Project filtering by category
- [ ] Language localization
- [ ] PWA capabilities
- [ ] Accessibility improvements

## Good First Issues
- [ ] Fix mobile menu animation
- [ ] Add hover states to all buttons
- [ ] Improve form validation
- [ ] Add loading skeletons
- [ ] Optimize image loading
🛠️ Development Guide
Customizing for Your Own Use
Change Personal Information

Update name, title, and description in index.html

Replace social media links

Modify contact information

Update Skills Section

html
<!-- In skills section -->
<div class="skill-bar">
  <span>Your Skill Here</span>
  <div class="skill-progress" data-width="85"></div>
</div>
Add Your Projects

html
<div class="project-card" data-tilt>
  <div class="project-image">
    <i class="fas fa-your-icon"></i>
  </div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Project description here</p>
    <div class="project-tech">
      <span>Tech 1</span>
      <span>Tech 2</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">
        <i class="fab fa-github"></i> Code
      </a>
    </div>
  </div>
</div>
Performance Optimization Tips
Minify assets for production:

bash
# Using online tools or build tools like:
# - CSS Nano for CSS
# - Terser for JavaScript
# - ImageOptim for images
Implement lazy loading:

javascript
// Add to images in the future
<img loading="lazy" src="image.jpg" alt="description">
📚 Learning Resources
For Understanding the Code
MDN Web Docs - HTML/CSS/JS reference

CSS-Tricks - Modern CSS techniques

JavaScript.info - Modern JavaScript tutorial

For Portfolio Inspiration
Awwwards - Design inspiration

Codepen - Code snippets and ideas

Dribbble - Design trends

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Icons by Font Awesome

Design inspiration from modern portfolio trends

Mentors at Vedam School of Technology

Open source community for continuous learning

📞 Support
For support, email jhah1225@gmail.com or create an issue in the GitHub repository.

Made with ❤️ by Harsh Kumar | Cybersecurity Student | Open Source Contributor
