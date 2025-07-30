# 🦴 Global Fossil Discovery

An interactive paleontology app where you can discover amazing fossils from around the world! Type any word to uncover incredible prehistoric specimens and build your personal fossil collection.

## ✨ Features

- 🌍 **Global Fossil Database**: Discover fossils from every continent
- 🎨 **Cute Illustrations**: Each fossil has its own adorable custom illustration
- 📚 **Collection Gallery**: Build and view your personal fossil museum
- 📊 **Progress Tracking**: Track your discovery progress and collection stats
- 🦕 **Educational Content**: Learn about geological periods, habitats, and locations
- 📱 **Responsive Design**: Works beautifully on desktop and mobile
- 🎯 **Rarity System**: Collect common to very rare specimens

## 🚀 Live Demo

Visit the live app: [fossil-discovery.netlify.app](https://fossil-discovery.netlify.app)

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/global-fossil-discovery.git
   cd global-fossil-discovery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### Deploy to Netlify

1. **Fork this repository**

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your forked repository
   - Build settings are automatically configured via `netlify.toml`

3. **Deploy**
   - Click "Deploy site"
   - Your app will be live in minutes!

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🏗️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Custom component library with shadcn/ui
- **Deployment**: Netlify (recommended)

## 📁 Project Structure

```
├── src/
│   └── main.tsx                 # React entry point
├── components/
│   ├── ui/                      # Reusable UI components
│   ├── FossilCard.tsx          # Individual fossil display
│   ├── FossilGallery.tsx       # Collection gallery modal
│   ├── FossilIllustration.tsx  # Cute fossil illustrations
│   └── PaleontologyBackground.tsx # Animated background
├── data/
│   └── fossils.ts              # Fossil database
├── styles/
│   └── globals.css             # Global styles and design tokens
├── App.tsx                     # Main application component
└── index.html                  # HTML entry point
```

## 🎨 Features in Detail

### Fossil Discovery
- Type any word to trigger a random fossil discovery
- Each fossil includes scientific name, geological period, location, and rarity
- Beautiful animations and loading states enhance the experience

### Collection System
- Track all discovered fossils in your personal gallery
- View collection statistics and progress
- Each fossil shows discovery date and trigger word
- Prevent duplicate entries while allowing re-discovery

### Educational Content
- Learn about fossils from different geological periods
- Discover specimens from locations worldwide
- Understand fossil rarity and scientific classification

## 🌟 Future Enhancements

- Achievement badges for collection milestones
- Fossil sharing and social features
- Educational quiz mode
- Real-time multiplayer fossil hunting
- Integration with real paleontology databases

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Fossil data inspired by real paleontological discoveries
- Icons provided by Lucide React
- UI components built with shadcn/ui
- Animated background inspired by geological formations

---

**Happy fossil hunting!** 🦴✨