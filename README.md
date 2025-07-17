# Pranav Purushan - Portfolio Website

A modern, responsive portfolio website showcasing VBA automation projects, Chrome extensions, work experience, and technical skills. Designed specifically for applications to quantitative finance roles.

## 🚀 Features

- **Modern Light Theme** - Clean, professional design optimized for recruiters
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements** - Smooth scrolling, hover effects, and project modals
- **VBA Project Showcase** - Dedicated section for automation projects with impact metrics
- **Chrome Extension Portfolio** - Highlights your development skills and user adoption
- **Professional Timeline** - Clean work experience presentation
- **Contact Integration** - Direct links to email, phone, and LinkedIn

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Light theme CSS styles
├── app.js             # JavaScript functionality
├── README.md          # This file
└── assets/            # Images and media files
    ├── placeholder.png # Profile photo placeholder
    └── project-gifs/   # GIF demonstrations of projects
```

## 🛠️ Setup Instructions

### Option 1: GitHub Pages (Recommended)
1. Create a new repository named `username.github.io` (replace `username` with your GitHub username)
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select source as "Deploy from a branch" and choose `main` branch
5. Your site will be live at `https://username.github.io`

### Option 2: Local Development
1. Download all files to a local folder
2. Open `index.html` in a web browser
3. For full functionality, serve through a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## 📝 Customization Guide

### 1. Personal Information
Update the following in `index.html`:
- Name in `<title>` and `<h1>` tags
- Contact details in the contact section
- LinkedIn and GitHub links

### 2. Profile Photo
- Replace `assets/placeholder.png` with your professional photo
- Recommended size: 300x300px, square format
- Ensure good lighting and professional appearance

### 3. VBA Projects
Update the project cards in the VBA section:
- **Project titles** - Make them descriptive and impact-focused
- **Descriptions** - Explain the business problem and solution
- **Impact metrics** - Use specific numbers (time saved, efficiency gained)
- **Technologies** - List relevant VBA features used

### 4. Chrome Extensions
For each extension:
- Update user counts with actual numbers
- Add real Chrome Web Store links
- Include screenshots or demos if available

### 5. Work Experience
- Update company names, roles, and dates
- Add quantified achievements with specific metrics
- Focus on automation, analysis, and technical contributions

### 6. Project Demonstrations
To add GIF demonstrations:
1. Create screen recordings of your VBA macros in action
2. Convert to GIF format (max 5MB for web performance)
3. Save in `assets/` folder
4. Update the `openModal()` function in `app.js` to include actual GIF paths

## 🎨 Theme Customization

The light theme uses CSS custom properties for easy customization:

```css
:root {
  --color-primary: #2563eb;        /* Main brand color */
  --color-background: #fefefe;     /* Page background */
  --color-surface: #ffffff;        /* Card backgrounds */
  --color-text: #1a1a1a;          /* Main text color */
  --color-text-secondary: #4a4a4a; /* Secondary text */
}
```

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first CSS approach
- Touch-friendly navigation
- Optimized typography for small screens
- Compressed images for faster loading

## 🔧 Technical Features

### JavaScript Functionality
- **Smooth scrolling** navigation
- **Intersection Observer** for scroll animations
- **Modal system** for project demonstrations
- **Active navigation** highlighting
- **Mobile menu** support

### Performance Optimizations
- **Lazy loading** for images
- **CSS custom properties** for consistent theming
- **Minimal JavaScript** for fast loading
- **Optimized images** for web delivery

## 📊 Analytics Integration

To add analytics tracking:
1. Add Google Analytics or similar tracking code to `index.html`
2. Update the `trackEvent()` function in `app.js`
3. Track navigation clicks and project interactions

## 🚀 Deployment Tips

### Before Going Live
- [ ] Update all personal information
- [ ] Add your professional photo
- [ ] Test all links and functionality
- [ ] Verify mobile responsiveness
- [ ] Check loading speeds
- [ ] Proofread all content

### SEO Optimization
- [ ] Add meta descriptions
- [ ] Include Open Graph tags
- [ ] Optimize image alt texts
- [ ] Add structured data markup

## 📧 Contact Information

**Pranav Purushan**
- Email: pranavpurushan@gmail.com
- Phone: +91 9967697990
- LinkedIn: [linkedin.com/in/pranav-purushan0](https://linkedin.com/in/pranav-purushan0)
- Location: Navi Mumbai, Maharashtra, India

## 🔗 Application Strategy

This portfolio is designed for:
- **Quantitative Research** positions
- **Financial Analysis** roles
- **Business Intelligence** positions
- **Data Automation** opportunities

### Key Selling Points
1. **Proven automation expertise** with measurable impact
2. **Technical versatility** across VBA, JavaScript, and data analysis
3. **Business acumen** with finance industry knowledge
4. **Problem-solving ability** demonstrated through real projects
5. **User-focused development** with extension adoption metrics

## 📈 Success Metrics

Track your portfolio's effectiveness:
- **Page views** and visitor engagement
- **Interview callback rates** after sharing the portfolio
- **Recruiter feedback** on presentation quality
- **Application response times** compared to resume-only applications

## 🤝 Contributing

Feel free to suggest improvements or report issues. This portfolio template can be adapted for various technical roles in finance.

---

**Ready to launch your career in quantitative finance!** 🚀