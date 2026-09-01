import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message cleanly and generating mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Your message was recorded! Opening email client...');
      
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBEAF0] dark:bg-[#241A25] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-mono font-bold tracking-wider mb-2 border border-[#F6D7E3] dark:border-[#3D273E]">
            <span>06 / CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
            Let's Create Something Meaningful.
          </h2>
          <p className="text-sm sm:text-base text-[#746A73] dark:text-[#BAAEB7] mt-3">
            I'm interested in Full Stack Development, UX Design, internship opportunities and collaborative technology projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-2xs hover:border-[#D85C8B]/50 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#746A73] dark:text-[#BAAEB7] block font-medium">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB] hover:text-[#D85C8B] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                className="p-2 rounded-lg text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E] hover:text-[#D85C8B] transition-colors cursor-pointer"
                title="Copy Email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-2xs hover:border-[#D85C8B]/50 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#746A73] dark:text-[#BAAEB7] block font-medium">Phone / WhatsApp</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB] hover:text-[#D85C8B] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone number')}
                className="p-2 rounded-lg text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E] hover:text-[#D85C8B] transition-colors cursor-pointer"
                title="Copy Phone"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-2xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#746A73] dark:text-[#BAAEB7] block font-medium">Location</span>
                <p className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB]">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-2xs hover:border-[#D85C8B]/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B] group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#746A73] dark:text-[#BAAEB7] block font-medium">GitHub Repository</span>
                  <span className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB] group-hover:text-[#D85C8B] transition-colors">
                    {PERSONAL_INFO.githubHandle}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#746A73] dark:text-[#BAAEB7] group-hover:text-[#D85C8B] transition-colors" />
            </a>

            {/* Quick direct CTA bar */}
            <div className="pt-2 flex gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-3 rounded-xl bg-[#FBEAF0] dark:bg-[#241A25] border border-[#D85C8B]/40 text-[#8E3D62] dark:text-[#E56B9F] hover:bg-[#F6D7E3] font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-[#1F1B24] dark:text-[#FFF7FB] hover:border-[#D85C8B]/40 font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Open GitHub</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Interactive Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-xl relative overflow-hidden">
            
            <h3 className="text-xl font-bold text-[#3B193F] dark:text-[#FFF7FB] mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#746A73] dark:text-[#BAAEB7] mb-6">
              Fill out the details below to inquire about development projects, internships, or collaboration.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-[#FBEAF0] dark:bg-[#1F1722] border border-[#D85C8B]/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#D85C8B] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#3B193F] dark:text-[#FFF7FB]">
                  Message Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-[#746A73] dark:text-[#BAAEB7] max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Your mail client should be opened with your prefilled details.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-[#8E3D62] text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer mt-2"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#8E3D62] dark:text-[#E56B9F] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ayesha Perera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FBEAF0]/30 dark:bg-[#1F1722] border text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-2 focus:ring-[#D85C8B] transition-all ${
                        errors.name ? 'border-red-400' : 'border-[#F6D7E3] dark:border-[#3D273E]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#8E3D62] dark:text-[#E56B9F] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ayesha@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FBEAF0]/30 dark:bg-[#1F1722] border text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-2 focus:ring-[#D85C8B] transition-all ${
                        errors.email ? 'border-red-400' : 'border-[#F6D7E3] dark:border-[#3D273E]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#8E3D62] dark:text-[#E56B9F] mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Full Stack Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FBEAF0]/30 dark:bg-[#1F1722] border text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-2 focus:ring-[#D85C8B] transition-all ${
                      errors.subject ? 'border-red-400' : 'border-[#F6D7E3] dark:border-[#3D273E]'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#8E3D62] dark:text-[#E56B9F] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your message or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FBEAF0]/30 dark:bg-[#1F1722] border text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-2 focus:ring-[#D85C8B] transition-all resize-none ${
                      errors.message ? 'border-red-400' : 'border-[#F6D7E3] dark:border-[#3D273E]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D85C8B] via-[#8E3D62] to-[#3B193F] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
