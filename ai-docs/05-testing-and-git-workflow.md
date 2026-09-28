# 05 - Testing, Quality Assurance & Git Protocol

## 🧪 Testing Protocol (Required Before Every Push)

Before committing and pushing any edit:

1. **Type & Lint Check**:
   - Run `npm run lint` or `npx tsc --noEmit` to ensure 0 TypeScript / lint errors.

2. **Build Verification**:
   - Run `npm run build` to verify all pages, dynamic routes, and server components compile without failure.

3. **Database Integration Check**:
   - Confirm all components fetch and mutate real data from Supabase without falling back to any mock constants.

4. **Interactive Flow Check**:
   - Verify Admin CRUD actions (Add, Edit, Delete).
   - Verify Booking submissions, Likes increment, and View logging.

---

## 🚀 Git Protocol

1. Keep commits atomic, clean, and descriptive.
2. Example commit format:
   - `git add .`
   - `git commit -m "feat: implement real-time hotel view tracking and Supabase schema"`
   - `git push origin <branch>`
