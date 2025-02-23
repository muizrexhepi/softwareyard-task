# **Two-Step Registration Form**

## **Project Overview**

This is a two-step registration form built with Next.js, TypeScript, and Tailwind CSS. It features smooth transitions, state persistence, and form validation, closely following a pixel-perfect Figma design.

## **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn**

## **Setup Instructions**

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd registration-form
   ```

2. **Install dependencies:**

   ```bash
   npm install  # or yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev  # or yarn dev
   ```
   The app will be available at `http://localhost:3000` by default.

---

## **Folder Structure**

```
/components      # Reusable UI components
/store           # Zustand state management
/pages          # Next.js page routes
/schemas        # Zod validation schemas
/styles         # Tailwind global styles
```

---

## **Key Technologies**

- **Next.js 14** – Server-side rendering & optimized performance
- **TypeScript** – Type safety & scalability
- **Tailwind CSS** – Utility-first styling
- **Zustand** – Lightweight state management
- **React Hook Form** – Efficient form handling
- **Zod** – Schema-based form validation
- **Framer Motion** – Smooth animations

---

## **Form Validation**

### **Step 1: User Information**

✅ **First Name:** Required, minimum 2 characters  
✅ **Last Name:** Required, minimum 2 characters

### **Step 2: Contact Information**

✅ **Country Code:** Required, must be a valid selection  
✅ **Phone Number:** Required, must follow international format (e.g., `+1 123-456-7890`)

All validations are handled with **Zod** and integrated with **React Hook Form** for instant feedback.

---

## **State Management (Zustand)**

The form state is managed globally using Zustand:  
✔ Preserves input data when navigating between steps  
✔ Allows users to go back without losing progress  
✔ Resets to initial state on submission

---

## **Accessibility Features**

- **ARIA labels** on inputs for screen readers
- **Semantic HTML structure** to enhance accessibility
- **Focus management** when navigating between steps

---

## **Animations & Transitions**

🚀 **Framer Motion** is used for step transitions:

- **200ms slide transitions** when moving forward and backward
- **Directional animation** based on navigation
- **Smooth and lag-free animations**

---

## **Testing Guide**

### **Recommended Test Cases**

| **Field**  | **Test Input**    | **Expected Outcome**                    |
| ---------- | ----------------- | --------------------------------------- |
| First Name | `A`               | ❌ Show "Minimum 2 characters required" |
| First Name | `John`            | ✅ Pass validation                      |
| Last Name  | `D`               | ❌ Show "Minimum 2 characters required" |
| Last Name  | `Doe`             | ✅ Pass validation                      |
| Phone      | `abcd1234`        | ❌ Show "Invalid phone number"          |
| Phone      | `+1 123-456-7890` | ✅ Pass validation                      |

---

## **Running Tests**

If automated tests are included, run them using:

```bash
npm test  # or yarn test
```

---

## **Deployment Guide**

This app can be deployed on **Vercel** or **Netlify**.

### **Deploying on Vercel**

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Configure settings (leave default settings).
4. Click **Deploy** and wait for the build to complete.

---

## **Conclusion**

This project ensures a **smooth user experience**, **pixel-perfect design**, and **optimized state management**. Happy coding! 🚀
