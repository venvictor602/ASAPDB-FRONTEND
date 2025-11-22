# ASAP DBA

A modern Next.js project scaffold with TypeScript, Tailwind CSS, and essential libraries.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Redux Toolkit (RTK)** - Powerful state management
- **Framer Motion** - Animation library
- **Embla Carousel** - Carousel component
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## 📦 Installation

Dependencies are already installed. If you need to reinstall:

```bash
pnpm install
```

## 🏃 Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
asap-dba/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── providers.tsx      # Redux & Sonner providers
│   ├── framer-motion-example.tsx
│   ├── carousel-example.tsx
│   ├── zustand-example.tsx
│   ├── rtk-example.tsx
│   ├── icons-example.tsx
│   └── toast-example.tsx
├── lib/                   # Utility functions & stores
│   ├── store.ts          # Redux Toolkit store
│   └── zustand-store.ts  # Zustand store
└── package.json
```

## 🎯 Usage Examples

### Zustand Store (with Persistence)

The Zustand store is configured with persistence to localStorage, so data persists across page refreshes.

```tsx
import { useZustandStore } from "@/lib/zustand-store";

function MyComponent() {
  const { count, increment } = useZustandStore();
  return <button onClick={increment}>Count: {count}</button>;
}
```

**Note:** The store persists data to `localStorage` under the key `zustand-storage`. You can change this in `lib/zustand-store.ts`.

### Redux Toolkit

```tsx
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { increment } from "@/lib/store";

function MyComponent() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.example.value);
  return <button onClick={() => dispatch(increment())}>Value: {value}</button>;
}
```

### Framer Motion

```tsx
import { motion } from "framer-motion";

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Animated content
</motion.div>;
```

### Embla Carousel

```tsx
import useEmblaCarousel from "embla-carousel-react";

const [emblaRef] = useEmblaCarousel({ loop: true });
<div ref={emblaRef}>...</div>;
```

### Sonner Toast

```tsx
import { toast } from "sonner";

toast.success("Success!");
toast.error("Error!");
```

### Lucide Icons

```tsx
import { Heart, Star } from "lucide-react";

<Heart className="w-6 h-6" />;
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📝 Notes

- All components are client components (use 'use client' directive)
- Redux Provider and Sonner Toaster are set up in the root layout
- Zustand store includes persistence middleware (saves to localStorage)
- TypeScript paths are configured with `@/*` alias
- Tailwind CSS is configured and ready to use

## 🎨 Customization

- Add your Redux slices in `lib/store.ts`
- Create Zustand stores in `lib/zustand-store.ts` or separate files
- Add new components in the `components/` directory
- Customize Tailwind in `tailwind.config.ts` (if needed)
