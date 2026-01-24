// Contact configuration - update in one place only
export const CONTACT = {
  whatsapp: {
    number: "+923135959079", // Replace with actual WhatsApp number
    message: "Hi! I'm interested in your web development services."
  },
  email: "sajidnadeem2020@gmail.com",
  location: "Remote • Pakistan",
  status: "Available for work"
} as const;

// Service pricing configuration
export const SERVICES = [
  {
    title: "1-page Website",
    price: "PKR 8k+",
    iconType: "Check",
    features: [
      "WhatsApp button integration",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Fast loading (24-72h delivery)"
    ]
  },
  {
    title: "Business Website (3–5 pages)",
    price: "PKR 15k+",
    iconType: "Check",
    features: [
      "Contact form integration",
      "Mobile responsive design",
      "Enhanced SEO optimization",
      "Professional design (24-72h delivery)"
    ]
  },
  {
    title: "Fix / Redesign",
    price: "PKR 5k+",
    iconType: "Check",
    features: [
      "Performance optimization",
      "Mobile responsiveness fixes",
      "Design improvements",
      "Quick turnaround (24-72h delivery)"
    ]
  },
  {
    title: "Custom Website",
    price: "PKR 25k+",
    iconType: "Palette",
    features: [
      "Tailored to your specific requirements",
      "Advanced functionality & integrations",
      "Custom design & branding",
      "Full project consultation",
      "Unlimited revisions & support"
    ]
  }
] as const;

// Testimonials (samples - replace with real ones)
export const TESTIMONIALS = [
  {
    name: "Ahmed Khan",
    role: "Clinic Owner",
    content: "Delivered our clinic website in 48 hours. Professional work and great communication.",
    rating: 5
  },
  {
    name: "Sarah Malik",
    role: "Tuition Center Director",
    content: "Fast, responsive, and affordable. Our student enrollment increased after the new website.",
    rating: 5
  },
  {
    name: "Usman Raza",
    role: "Startup Founder",
    content: "Excellent service. Got our business website up and running quickly with all features we needed.",
    rating: 5
  }
] as const;