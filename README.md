# Modern Portfolio Website

A sleek, modern portfolio website built with React and Tailwind CSS, featuring a black and white color theme. Perfect for showcasing your work and skills.

## 🚀 Features

- **Modern Design**: Clean, minimalist black and white theme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations and transitions
- **Resume Download**: Built-in resume download functionality
- **Contact Form**: Interactive contact form for easy communication
- **Project Showcase**: Beautiful project cards with links to live demos and code
- **Skills Section**: Visual representation of your technical skills
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.jsx**
   - Change "Your Name" to your actual name
   - Update the title/role
   - Modify the description
   - Update social media links

2. **src/components/About.jsx**
   - Update the about text
   - Change the statistics (years of experience, projects, clients)
   - Replace the placeholder image/emoji with your photo

3. **src/components/Skills.jsx**
   - Modify the skills and their proficiency levels
   - Add or remove skill categories

4. **src/components/Projects.jsx**
   - Replace with your actual projects
   - Update project descriptions, tags, and links
   - Add project images (replace emojis with actual images)

5. **src/components/Contact.jsx**
   - Update email, phone, and location
   - Modify social media links
   - Configure form submission (integrate with EmailJS, Formspree, etc.)

### Resume

Replace `public/resume.pdf` with your actual resume PDF file. The download button in the About section will automatically use this file.

### Colors and Styling

The color theme is configured in `tailwind.config.js`. You can modify:
- Primary and secondary colors
- Animation timings
- Custom utilities

## 🚀 Deployment on Vercel

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "New Project" and import your GitHub repository

4. Vercel will automatically detect it's a Vite project

5. Click "Deploy"

That's it! Your portfolio will be live in minutes.

### Environment Variables (Optional)

If you're using a contact form service, add your API keys in Vercel:
- Go to Project Settings → Environment Variables
- Add your variables (e.g., `VITE_EMAILJS_SERVICE_ID`)

## 📝 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🎯 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero/landing section
│   │   ├── About.jsx       # About section with resume download
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Projects.jsx    # Projects portfolio
│   │   └── Contact.jsx     # Contact form
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization Tips

1. **Add Your Photo**: Replace the emoji in About.jsx with an actual image
2. **Project Images**: Add real project screenshots to the Projects section
3. **Favicon**: Replace the default favicon in `public/`
4. **Meta Tags**: Update meta tags in `index.html` for better SEO
5. **Contact Form**: Integrate with EmailJS, Formspree, or your backend API

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ and React
