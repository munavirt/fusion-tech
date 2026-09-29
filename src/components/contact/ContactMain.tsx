"use client";

import { useState, useRef, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import gsap from "gsap";
import { ContactSuccessState } from "./ContactSuccessState";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  inquiryType?: string;
  message?: string;
}

export function ContactMain() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Smart Automation Systems",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const errs: FormErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please describe your project or inquiry.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When form returns to idle, fade it back in if it was hidden
    if (formState === "idle" && formContainerRef.current) {
      gsap.fromTo(
        formContainerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", clearProps: "all" }
      );
    }
  }, [formState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      if (formContainerRef.current) {
        gsap.to(formContainerRef.current, {
          opacity: 0,
          y: -15,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            setFormState("success");
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              company: "",
              inquiryType: "Smart Home Automation",
              message: "",
            });
            setErrors({});
          }
        });
      } else {
        setFormState("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "Smart Home Automation",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const fieldKey = name as keyof FormErrors;
    if (errors[fieldKey]) {
      setErrors((prev) => ({ ...prev, [fieldKey]: undefined }));
    }
  };

  return (
    <section id="inquiry-form" className="bg-secondary/30 py-24 lg:py-32 border-t border-border/40">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          {/* Left Column: Direct Contact Details & Operations */}
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
                DIRECT CHANNELS
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-foreground">
                How to Reach Us
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Have questions about system capabilities, pricing scopes, or
                architectural compatibility? Speak directly with our team or
                visit our regional engineering office.
              </p>

              {/* Information Cards / Rows */}
              <div className="mt-10 space-y-7 border-t border-border/50 pt-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <Phone className="size-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </h3>
                    <a
                      href="tel:+919539567222"
                      className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                      +91 95395 67222
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <Mail className="size-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:fusiontechexperts2025@gmail.com"
                      className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                      fusiontechexperts2025@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <MapPin className="size-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Office Location
                    </h3>
                    <p className="mt-1 text-base text-foreground leading-relaxed">
                      Karuvankallu, Airpoart Road, Kunnupuram
                      <br />
                      Malappuram 673638, Kerala, India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <Clock className="size-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Business Hours
                    </h3>
                    <p className="mt-1 text-sm text-foreground leading-relaxed">
                      Monday – Sunday: 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Note */}
              <div className="mt-10 rounded-[16px] border border-border/60 bg-background/80 p-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <strong className="text-foreground font-semibold">Response Commitment:</strong> Form submissions and direct emails are reviewed by our engineering staff and typically answered within 24 business hours.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Inquiry Form */}
          <div>
            <Reveal delay={100}>
              <div className="rounded-[20px] border border-border/40 bg-background/95 p-8 lg:p-10 shadow-sm max-w-2xl ml-auto">
                {formState === "success" ? (
                  <ContactSuccessState onReset={() => setFormState("idle")} />
                ) : (
                  <div ref={formContainerRef}>
                    <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase mb-3">
                      Project Inquiry
                    </p>
                    <h3 className="font-display text-[clamp(1.75rem,2.5vw,2.25rem)] font-semibold tracking-tight text-foreground">
                      Tell Us About Your Project
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground mb-8">
                      Share a few details about your space, requirements, or product interests. Our team will review your inquiry and guide you toward the right solution.
                    </p>

                    {formState === "error" && (
                      <div className="mb-6 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                        Something went wrong while sending your message. Please try again later.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-[13px] font-medium text-foreground mb-2"
                          >
                            Full name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                            aria-invalid={!!errors.fullName}
                            aria-describedby={errors.fullName ? "fullName-error" : undefined}
                          />
                          {errors.fullName && (
                            <p id="fullName-error" className="mt-1.5 text-xs text-destructive">
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[13px] font-medium text-foreground mb-2"
                          >
                            Email address <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-1.5 text-xs text-destructive">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone & Company Row */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-[13px] font-medium text-foreground mb-2"
                          >
                            Phone number <span className="text-muted-foreground font-normal">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="block text-[13px] font-medium text-foreground mb-2"
                          >
                            Company / organization <span className="text-muted-foreground font-normal">(optional)</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company or organization"
                            className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-[13px] font-medium text-foreground mb-2"
                        >
                          Inquiry subject
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="Smart Home Automation">Smart Home Automation</option>
                          <option value="Security & Surveillance">Security &amp; Surveillance</option>
                          <option value="Climate Control">Climate Control</option>
                          <option value="Access & Security">Access &amp; Security</option>
                          <option value="Smart Curtains">Smart Curtains</option>
                          <option value="Irrigation Automation">Irrigation Automation</option>
                          <option value="Hospitality Automation">Hospitality Automation</option>
                          <option value="Intercom & Connected Buildings">Intercom &amp; Connected Buildings</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[13px] font-medium text-foreground mb-2"
                        >
                          Project details or questions <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your space, requirements, preferred timeline, or questions."
                          className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary resize-y min-h-[120px]"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1.5 text-xs text-destructive">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={formState === "submitting"}
                          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift disabled:pointer-events-none disabled:opacity-70"
                        >
                          {formState === "submitting" ? (
                            <>
                              <Loader2 className="size-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Inquiry
                              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
