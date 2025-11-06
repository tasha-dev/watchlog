# 📺 WatchLog

**WatchLog** is a simple cloud-synced watchlist app that lets users track and rate movies or TV series from anywhere.  
It uses **Firebase Authentication** and **Cloud Firestore** for storing watch history securely online.

✅ Track watched movies & series  
✅ Rate titles (1–5 ⭐)  
✅ Access from any device  
✅ Import watchlist from `.txt` file  
✅ Modern and fast UI (Next.js + Tailwind)

---

## 🚀 Features

| Feature          | Description                                       |
| ---------------- | ------------------------------------------------- |
| ☁️ Cloud Sync    | All data is saved in Firestore under user account |
| ⭐ Rating System | Up to 5 stars per title                           |
| 📁 TXT Import    | Upload `.txt` file to bulk add items              |
| ⚛️ Built with    | Next.js, React, Firebase, TailwindCSS, TypeScript |

---

## 📦 TXT Import Format

```

N = index number
MSN = Movie or Series name
SN = star emojis (⭐) up to 5

Format:
N_MSN SN

Example:
1_Interstellar ⭐⭐⭐⭐⭐
2_You ⭐⭐⭐⭐
3_Harry_Potter ⭐⭐⭐

```

WatchLog will automatically parse each line, detect rating based on ⭐ count, and store items in Firestore.

---

## 🏗️ Tech Stack

- **Next.js 14**
- **TypeScript**
- **Cloud Firestore**
- **TailwindCSS**
- **Radix UI** for components (optional)
- **Vercel** (recommended hosting)

---

## 📝 License

MIT License — free to use and modify.

---

## 👑 Author

Built with ❤️ by **Mahdi Tasha**
