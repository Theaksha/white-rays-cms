import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

// CMS Data Types and Storage
export interface CMSData {
  branding: {
    logoText: string;
    companyName: string;
    logoUrl?: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    items: { title: string; description: string; icon: string }[];
  };
  projects: {
    title: string;
    subtitle: string;
    description: string;
    items: { id: string; title: string; description: string; tags: string[] }[];
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

const defaultData: CMSData = {
  branding: {
    logoText: "WR",
    companyName: "WHITE RAYS TECHNOLOGIES",
    logoUrl: ""
  },
  hero: {
    title: "Welcome to White Rays Technologies LLP",
    subtitle: "Positive Innovations",
    description: "We are architects of cutting-edge technology, creators of digital experiences, and partners in your journey towards innovation. Transform your ideas into robust, scalable, and future-proof solutions.",
    stats: [
      { label: "Projects Completed", value: "100+" },
      { label: "Happy Clients", value: "50+" },
      { label: "Years Experience", value: "5+" }
    ]
  },
  services: {
    title: "We Offer a Wide Variety of IT Services",
    subtitle: "our services",
    description: "From concept to deployment, we provide comprehensive technology solutions that drive business growth and digital transformation.",
    items: [
      { title: "Web and Mobile App Development", description: "We carry more than just good coding skills. Our experience makes us stand out from other web development.", icon: "Code" },
      { title: "QA & Testing", description: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.", icon: "Bug" },
      { title: "Custom Software Development", description: "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.", icon: "Layers" },
      { title: "Cloud Solutions", description: "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.", icon: "Cloud" }
    ]
  },
  projects: {
    title: "Design the Concept of Your Business Idea Now",
    subtitle: "why choose us",
    description: "Explore our innovative projects that showcase cutting-edge technology and demonstrate our commitment to delivering exceptional digital solutions.",
    items: [
      { id: "01", title: "Anvesh AI", description: "An Invoice-OCR and data analytics solution based on ML for extracting, analyzing invoice data efficiently", tags: ["Machine Learning", "OCR", "Data Analytics", "AI"] },
      { id: "02", title: "LLaMAVision", description: "A custom-trained LLaMA 3-based GPT model tailored for advanced insights and domain-specific expertise", tags: ["LLaMA 3", "GPT", "Custom AI", "NLP"] },
      { id: "03", title: "Pravartak ERP", description: "A low-code ERP solution with integrated POS, designed for streamlined business operations and rapid deployment.", tags: ["ERP", "Low-code", "POS", "Business"] }
    ]
  },
  contact: {
    phone: "+91 9970053789",
    email: "contact@whiteraystech.in",
    address: "India"
  }
};

export const getCMSData = async (): Promise<CMSData> => {
  try {
    const docRef = doc(db, 'cms', 'data');
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as CMSData : defaultData;
  } catch (error) {
    console.error('Error fetching CMS data:', error);
    return defaultData;
  }
};

export const saveCMSData = async (data: CMSData): Promise<void> => {
  try {
    const docRef = doc(db, 'cms', 'data');
    await setDoc(docRef, data);
  } catch (error) {
    console.error('Error saving CMS data:', error);
    throw error;
  }
};

export const uploadLogo = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const resetCMSData = async (): Promise<void> => {
  try {
    const docRef = doc(db, 'cms', 'data');
    await setDoc(docRef, defaultData);
  } catch (error) {
    console.error('Error resetting CMS data:', error);
    throw error;
  }
};