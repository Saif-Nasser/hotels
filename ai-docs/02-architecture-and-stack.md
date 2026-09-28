# 02 - Architecture and Tech Stack

## 🏗️ Architecture Overview

The system is a full-stack Next.js web application utilizing Supabase for real-time PostgreSQL database, Authentication, and Storage.

```mermaid
graph TD
    Client[Customer / Pilgrim Web Client] --> NextApp[Next.js App Router]
    Admin[Admin Management Portal] --> NextApp
    
    subgraph Backend & DB
        NextApp --> SupabaseDB[(Supabase PostgreSQL)]
        NextApp --> SupabaseAuth[Supabase Auth (Admin/User)]
        NextApp --> SupabaseStorage[Supabase Storage (Hotel/Room Images)]
    end
    
    subgraph Data Flow
        SupabaseDB --> Hotels[Hotels & Rooms]
        SupabaseDB --> Bookings[Bookings & Reservations]
        SupabaseDB --> Analytics[Real-time Views & Likes Logs]
    end
```

---

## 💻 Technology Stack

1. **Framework**: [Next.js (App Router, React 19, TypeScript)](https://nextjs.org)
2. **Styling**: Tailwind CSS, Tailwind Animate, Lucide React Icons
3. **Database & Backend**: Supabase (PostgreSQL with Row Level Security, Realtime, Auth, and Storage)
4. **Analytics & Charts**: Recharts (for admin dashboard views, likes, and booking statistics)
5. **State & Validation**: React Hook Form, Zod schema validation
6. **Localization**: English & Arabic bilingual support with RTL support
