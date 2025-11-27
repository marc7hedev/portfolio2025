-### Phase 2: Performance Engineering ("Obsession for Performance")
*Objective: Minimize TTI (Time to Interactive) and LCP (Largest Contentful Paint).*
- **Spline Optimization**: Added loading skeleton and `onLoad` handler to iframe in `HeroSection` to improve perceived performance.
- **Bundle Analysis**: Implemented `LazyMotion` with `domAnimation` in `Providers` component to reduce initial bundle size.
- **Code Splitting**: Wrapped app in `Providers` to handle context providers efficiently.
