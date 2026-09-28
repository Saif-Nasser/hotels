# 01 - Core Rules & Development Protocol

These rules must be strictly followed with every single edit, task, and iteration on this project.

---

### 🚨 Mandatory Development Rules

1. **NO FAKE / MOCK DATA**:
   - Never hardcode mock or dummy data arrays in UI components or services.
   - All data displayed (hotels, rooms, locations, views, likes, bookings, statistics) must be real data fetched directly from the database (Supabase).
   - If initial data is needed, create and run real database migration/seeding scripts directly into Supabase.

2. **COMMIT & PUSH WITH EVERY EDIT**:
   - After completing and verifying any feature, bug fix, or update, commit and push changes with a descriptive message.

3. **LEAN, EFFICIENT CODE & FASTEST EXECUTION**:
   - Write clean, concise, high-performance code with minimal dependencies and zero unnecessary boilerplate.
   - Reuse components, hooks, and database queries efficiently.

4. **TEST BEFORE EVERY COMMIT / PUSH**:
   - Thoroughly test every edit locally (build check, linting, route verification, database query validation).
   - Never push code until every single test and interaction works smoothly with zero errors.

5. **CONTINUOUS ADHERENCE**:
   - Check and enforce these rules on every prompt, tool call, and file modification.

---

### 🕌 Domain & Hospitality Specifics
- **Pilgrim-first UX**: Accurate distances to the Haram (Makkah & Madinah), Kaaba view tags, Halal amenities, prayer rooms, shuttle services.
- **Admin Control**: Complete management (CRUD) for hotels, rooms, locations, and live analytics (views, likes, bookings).
- **Security & RLS**: All Supabase tables protected with strict Row Level Security policies (Public read/interact, Admin manage).
