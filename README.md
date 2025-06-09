# InfluencerFlow Waitlist

A modern, responsive waitlist signup website for InfluencerFlow, built by Team Ctrl+Alt+Defeat. This project serves as the landing page for collecting early interest and building a community of potential users for the InfluencerFlow platform.

## 🚀 Features

- Modern, responsive design using Next.js and Tailwind CSS
- Beautiful UI components built with Radix UI
- Dark/Light mode support
- Mobile-first approach
- Form validation and submission handling
- Waitlist signup functionality with demo booking
- Social proof sections
- Platform features showcase
- Animated form transitions and success states
- Optional and required field handling

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form with Zod validation
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts
- **Date Handling:** date-fns
- **Notifications:** Sonner

## 📋 Form Features

The waitlist form includes:

### Current Fields
- Name (optional)
- Email (required)
- Referral Source (optional)
  - Twitter/X
  - LinkedIn
  - Google/Search Engine
  - Friend/Colleague
  - Other

### Future Fields (Currently Commented)
The following fields are prepared but currently commented out for future use:
- Company Name
- Monthly Influencer Spend
  - ₹0 - ₹10,000
  - ₹10,000 - ₹50,000
  - ₹50,000 - ₹1,00,000
  - ₹1,00,000+

These fields can be easily enabled by uncommenting the relevant sections in the `lead-form.tsx` component.

## 🏗️ Project Structure

```
├── app/                 # Next.js app directory
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature-specific components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── public/            # Static assets
└── styles/            # Global styles
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/sanjayprataps/InfluencerFlow_Waitlist.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Built with ❤️ by Team Ctrl+Alt+Defeat
