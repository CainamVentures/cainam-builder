# Cainam Frontend Technical Context

## Technology Stack
1. Core Technologies
   - Next.js 14+
   - React 18+
   - TypeScript 5+
   - Node.js 18+

2. UI Framework
   - Tailwind CSS
   - Shadcn/ui
   - Radix UI Primitives
   - Lucide Icons

3. Development Tools
   - ESLint
   - Prettier
   - PostCSS
   - SWC

## Development Setup
1. Prerequisites
   ```bash
   Node.js v18 or higher
   npm v9 or higher
   Git
   ```

2. Installation
   ```bash
   git clone <repository>
   cd cainam-frontend
   npm install
   ```

3. Development Commands
   ```bash
   npm run dev      # Start development server
   npm run build    # Build for production
   npm run start    # Start production server
   npm run lint     # Run linter
   npm run format   # Format code
   ```

## Dependencies
1. Core Dependencies
   ```json
   {
     "next": "14+",
     "react": "18+",
     "react-dom": "18+",
     "typescript": "5+"
   }
   ```

2. UI Dependencies
   ```json
   {
     "@radix-ui/react-*": "^1.0.0",
     "class-variance-authority": "^0.7.0",
     "clsx": "^2.0.0",
     "lucide-react": "^0.4.0",
     "tailwind-merge": "^2.0.0",
     "tailwindcss-animate": "^1.0.0"
   }
   ```

## Technical Constraints
1. Browser Support
   - Modern browsers only
   - No IE11 support
   - Mobile-first approach

2. Performance Targets
   - First Load < 2s
   - Time to Interactive < 3s
   - Core Web Vitals compliance

3. Security Requirements
   - HTTPS only
   - CSP headers
   - Input sanitization
   - XSS prevention

4. Code Quality Standards
   - TypeScript strict mode
   - ESLint rules enforced
   - Prettier formatting
   - Component documentation 