// Mock data for Anurag Traders website

export const companyInfo = {
  name: "Anurag Traders",
  tagline: "Your Trusted Partner in Civil Engineering Goods Transport",
  phone: "7565865563",
  email: "yadaavgagan@gmail.com",
  description: "Leading provider of reliable and efficient transport services for construction materials and civil engineering goods. We ensure timely delivery with utmost care and professionalism."
};

export const services = [
  {
    id: 1,
    title: "Heavy Material Transport",
    description: "Safe and secure transportation of heavy construction materials including cement, steel, aggregates, and more.",
    features: ["GPS Tracking", "Insurance Coverage", "24/7 Support", "On-time Delivery"],
    pricing: "Starting from ₹5,000",
    icon: "truck"
  },
  {
    id: 2,
    title: "Equipment Delivery",
    description: "Specialized transport for construction equipment and machinery with expert handling and care.",
    features: ["Crane Loading", "Secure Packaging", "Professional Drivers", "Route Optimization"],
    pricing: "Starting from ₹8,000",
    icon: "settings"
  },
  {
    id: 3,
    title: "Bulk Material Supply",
    description: "Efficient bulk transportation of sand, gravel, bricks, and other construction materials.",
    features: ["Large Fleet", "Volume Discounts", "Flexible Scheduling", "Quality Assurance"],
    pricing: "Starting from ₹4,000",
    icon: "package"
  },
  {
    id: 4,
    title: "Express Delivery",
    description: "Urgent delivery services for time-critical construction materials and supplies.",
    features: ["Same Day Delivery", "Priority Handling", "Real-time Updates", "Emergency Support"],
    pricing: "Starting from ₹6,500",
    icon: "zap"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1590856029620-23a411d1945c?w=800",
    title: "Heavy Material Transport",
    category: "transport"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800",
    title: "Construction Equipment",
    category: "equipment"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1597476392367-76a58e0f7e8d?w=800",
    title: "Bulk Material Delivery",
    category: "bulk"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800",
    title: "Safe Loading",
    category: "transport"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1590856029620-23a411d1945c?w=800",
    title: "On-time Delivery",
    category: "delivery"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1597476392367-76a58e0f7e8d?w=800",
    title: "Professional Service",
    category: "service"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Kumar Constructions",
    review: "Anurag Traders has been our go-to transport partner for over 2 years. Their reliability and professionalism are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Sharma Builders",
    review: "Excellent service! They always deliver on time and handle materials with great care. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Patel Infrastructure",
    review: "Professional team with great communication. Their pricing is competitive and service quality is outstanding.",
    rating: 5
  }
];

export const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Deliveries Completed", value: "5000+" },
  { label: "Fleet Vehicles", value: "25+" }
];

// Mock form submission
export const submitQuoteRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Quote request submitted:', formData);
      resolve({ success: true, message: 'Quote request received! We will contact you soon.' });
    }, 1000);
  });
};

// Mock contact form submission
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({ success: true, message: 'Thank you for reaching out! We will get back to you shortly.' });
    }, 1000);
  });
};