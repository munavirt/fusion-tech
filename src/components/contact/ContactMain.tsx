"use client";

import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "Smart Automation Systems",
        message: "",
      });
      setErrors({});
    }, 1200);
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
                      href="tel:+919000000000"
                      className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                      +91 90000 00000
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
                      href="mailto:hello@fusiontechexpert.com"
                      className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                      hello@fusiontechexpert.com
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
                      Level 4, Tech Boulevard,
                      <br />
                      Bengaluru 560103, Karnataka, India
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
                      Monday – Saturday: 9:00 AM – 6:00 PM IST
                      <br />
                      <span className="text-muted-foreground">Sunday: Closed</span>
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
                  <div className="py-12 text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="size-7" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
                      Inquiry Received
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md mx-auto">
                      Thank you for contacting FusionTech. A member of our
                      project advisory team will review your requirements and
                      respond shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormState("idle")}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-secondary"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase mb-3">
                      Project Inquiry
                    </p>
                    <h3 className="font-display text-[clamp(1.75rem,2.5vw,2.25rem)] font-semibold tracking-tight text-foreground">
                      Tell Us About Your Project
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground mb-8">
                      Share a few details about your space, requirements, or product interests. Our team will review your inquiry and guide you toward the right solution.
                    </p>

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
                          <option value="Smart Automation Systems">Smart Automation Systems</option>
                          <option value="Architectural Lighting Control">Architectural Lighting Control</option>
                          <option value="Digital Access & Security">Digital Access &amp; Security</option>
                          <option value="Motorized Curtains & Shading">Motorized Curtains &amp; Shading</option>
                          <option value="Hospitality & Hotel Automation">Hospitality &amp; Hotel Automation</option>
                          <option value="Commercial / Enterprise Building Systems">Commercial / Enterprise Building Systems</option>
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
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
