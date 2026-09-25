"use client";

import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = ["Residential", "Hospitality", "Enterprise", "Other"];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors['name'] = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors['email'] = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors['email'] = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors['message'] = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState("submitting");
    
    // Simulate form submission - replace with actual API call
    // This is a placeholder for future backend integration
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormState("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        location: "",
        message: ""
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => setFormState("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as string]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  if (formState === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
          <CheckCircle2 className="size-10" />
        </div>
        <h3 className="font-display text-3xl font-semibold mb-4">Thank you for reaching out</h3>
        <p className="text-lg text-muted-foreground">
          We'll get back to you within 24-48 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight mb-4">
                Start the conversation
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24-48 hours.
              </p>
            </div>
          </Reveal>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={0.1}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors['name'] ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your name"
                  />
                  {errors['name'] && <p className="text-red-500 text-sm mt-1">{errors['name']}</p>}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Company name (optional)"
                  />
                </div>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={0.2}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors['email'] ? "border-red-500" : "border-border"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors['email'] && <p className="text-red-500 text-sm mt-1">{errors['email']}</p>}
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={0.3}>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </Reveal>

              <Reveal delay={0.35}>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="City, State"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${
                    errors['message'] ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Tell us about your project, requirements, and what you want to achieve..."
                />
                {errors['message'] && <p className="text-red-500 text-sm mt-1">{errors['message']}</p>}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-[13px] uppercase tracking-wider font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 w-full sm:w-auto"
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </Reveal>
          </form>
        </div>
      </div>
    </section>
  );
}