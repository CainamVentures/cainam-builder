# Cainam Frontend System Patterns

## Architecture Overview
- Next.js 14+ App Router
- React 18+ with Server Components
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn/ui component system

## Design Patterns
1. Component Architecture
   - Client Components: Interactive UI elements
   - Server Components: Static content and data fetching
   - Shared Components: Reusable UI elements

2. State Management
   - React Hooks for local state
   - Server state with React Query (planned)
   - Form state with React Hook Form (planned)

3. Layout Structure
   - App Router based routing
   - Nested layouts
   - Shared navigation components
   - Responsive design patterns

4. Component Patterns
   - Compound Components (e.g., Chat components)
   - Render Props (where needed)
   - Custom Hooks (e.g., useAutoScroll)
   - Context Providers (theme, auth)

## Key Technical Decisions
1. Styling
   - Tailwind CSS for utility-first styling
   - CSS Variables for theming
   - CSS Modules for component-specific styles
   - Dark mode support

2. Component Library
   - Shadcn/ui as base component system
   - Custom components extend base system
   - Consistent design language
   - Accessibility built-in

3. Performance
   - Server Components for static content
   - Client Components for interactivity
   - Optimized builds with SWC
   - Image optimization

4. Development Experience
   - TypeScript for type safety
   - ESLint for code quality
   - Prettier for formatting
   - Husky for git hooks (planned)

## Component Relationships
1. Layout Components
   ```
   RootLayout
   ├── Sidebar
   └── PageContent
       ├── Header
       └── MainContent
   ```

2. Feature Components
   ```
   AgentBuilder
   ├── ComponentList
   ├── ConfigPanel
   └── Workspace
   ```

3. Chat Components
   ```
   ExpandableChat
   ├── ChatHeader
   ├── ChatMessageList
   │   └── ChatBubble
   └── ChatInput
   ```

4. Common Components
   ```
   UI
   ├── Button
   ├── Card
   ├── Input
   └── Avatar
   ``` 