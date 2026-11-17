import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Send, Mail, MapPin, Sparkles, Loader2, Github, Linkedin, ArrowUpRight, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { contactData } from '../data/content.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Copy email to clipboard handler
  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(contactData.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = contactData.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters long';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const web3FormsKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      'fb726309-d53d-410d-9928-d8860942374a';

    try {
      let response;
      if (web3FormsKey) {
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: trimmedName,
            email: trimmedEmail,
            subject: `Portfolio Message from ${trimmedName}`,
            message: trimmedMessage,
            from_name: `${trimmedName} via Portfolio`
          })
        });
      } else {
        response = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(contactData.email)}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              name: trimmedName,
              email: trimmedEmail,
              _replyto: trimmedEmail,
              _subject: `Portfolio Message from ${trimmedName}`,
              message: trimmedMessage,
              _template: 'table',
              _captcha: 'false'
            })
          }
        );
      }

      const data = await response.json().catch(() => ({}));
      const isSuccess =
        response.ok && (data.success === true || data.success === 'true');

      if (!isSuccess) {
        throw new Error(
          data.message || 'Unable to deliver message right now. Please try again or email directly.'
        );
      }

      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#693bca', '#80d8ff', '#ffb3cb', '#b9a5ff']
        });
      } catch {
        // Confetti fallback
      }
    } catch (err) {
      setSubmitError(
        err?.message ||
          'Could not send message automatically. You can send it directly via your email app below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setErrors({});
    setSubmitError('');
    setIsSubmitted(false);
  };

  const mailtoFallbackHref = `mailto:${contactData.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name.trim() || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ebff] text-[#693bca] text-[11px] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{contactData.eyebrow}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#19172a] tracking-tight leading-[1.15]">
            {contactData.heading}{' '}
            <span className="font-serif italic font-normal text-[#693bca]">
              {contactData.headingAccent}
            </span>{' '}
            {contactData.headingSuffix}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#58536e] leading-relaxed">
            {contactData.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5 text-left"
          >
            {/* Email Card with Working Copy */}
            <div className="rounded-[28px] p-6 sm:p-7 bg-white/80 backdrop-blur-xl border border-white/95 shadow-[0_10px_30px_-5px_rgba(27,25,44,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(105,59,202,0.1)] transition-all duration-300">
              <span className="text-[11px] font-mono text-[#7a7485] uppercase tracking-wider block mb-2 font-semibold">
                Email
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#f6f1ff]/70 border border-white">
                <a
                  href={`mailto:${contactData.email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-[#19172a] hover:text-[#693bca] transition-colors truncate"
                >
                  {contactData.email}
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 shrink-0 ${
                    copied
                      ? 'bg-[#27c93f] text-white shadow-xs'
                      : 'bg-white text-[#19172a] hover:bg-[#693bca] hover:text-white shadow-xs border border-white'
                  }`}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-[28px] p-6 bg-white/80 backdrop-blur-xl border border-white/95 shadow-xs flex items-center gap-4 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#f0ebff] flex items-center justify-center text-[#693bca] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#7a7485] uppercase tracking-wider block font-semibold">
                  Location
                </span>
                <span className="font-display font-semibold text-base text-[#19172a]">
                  {contactData.location}
                </span>
              </div>
            </motion.div>

            {/* Social Links (GitHub, LinkedIn) */}
            <div className="rounded-[28px] p-6 bg-white/80 backdrop-blur-xl border border-white/95 shadow-xs">
              <span className="text-[11px] font-mono text-[#7a7485] uppercase tracking-wider block mb-3 font-semibold">
                Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={contactData.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fcf8ff] hover:bg-[#f0ebff] border border-white text-xs font-medium text-[#19172a] hover:text-[#693bca] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#58536e] group-hover:text-[#693bca]" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7a7485] group-hover:text-[#693bca] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fcf8ff] hover:bg-[#f0ebff] border border-white text-xs font-medium text-[#19172a] hover:text-[#693bca] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#006684] group-hover:text-[#693bca]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7a7485] group-hover:text-[#693bca] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form with Button "Get In Touch" */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-[32px] p-6 sm:p-10 bg-white/85 backdrop-blur-2xl border border-white/95 shadow-[0_16px_40px_-8px_rgba(25,23,42,0.06)] text-left">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#19172a] mb-1 tracking-tight">
                        Send a message
                      </h3>
                      <p className="text-xs sm:text-sm text-[#58536e]">
                        Leave your message below and let's start a conversation.
                      </p>
                    </div>

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-medium text-[#19172a] uppercase tracking-wider mb-2">
                        Name <span className="text-[#af1e42]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#fcf8ff] border ${
                          errors.name ? 'border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a]' : 'border-[#cbc3d6]/60 focus:border-[#693bca] focus:ring-2 focus:ring-[#693bca]/15'
                        } text-sm text-[#19172a] placeholder-[#7a7485] outline-none transition-all`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-[#ba1a1a] mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-[#19172a] uppercase tracking-wider mb-2">
                        Email <span className="text-[#af1e42]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="your@email.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#fcf8ff] border ${
                          errors.email ? 'border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a]' : 'border-[#cbc3d6]/60 focus:border-[#693bca] focus:ring-2 focus:ring-[#693bca]/15'
                        } text-sm text-[#19172a] placeholder-[#7a7485] outline-none transition-all`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-[#ba1a1a] mt-1.5">{errors.email}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono font-medium text-[#19172a] uppercase tracking-wider mb-2">
                        Message <span className="text-[#af1e42]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="How can we collaborate or connect?"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#fcf8ff] border ${
                          errors.message ? 'border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a]' : 'border-[#cbc3d6]/60 focus:border-[#693bca] focus:ring-2 focus:ring-[#693bca]/15'
                        } text-sm text-[#19172a] placeholder-[#7a7485] outline-none transition-all resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[11px] font-mono text-[#ba1a1a] mt-1.5">{errors.message}</p>
                      )}
                    </div>

                    {submitError && (
                      <div className="p-3.5 rounded-2xl bg-[#fff1f3] border border-[#ff5c79]/30 text-left space-y-2">
                        <div className="flex items-start gap-2 text-xs text-[#ba1a1a] font-medium">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{submitError}</span>
                        </div>
                        <a
                          href={mailtoFallbackHref}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#693bca] hover:underline"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send directly via email app</span>
                        </a>
                      </div>
                    )}

                    {/* Button: Get In Touch */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#19172a] text-white font-medium text-sm tracking-wide shadow-[0_10px_25px_-5px_rgba(25,23,42,0.2)] hover:bg-[#693bca] hover:shadow-[0_12px_28px_-4px_rgba(105,59,202,0.4)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#80d8ff]" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>{contactData.buttonText}</span>
                          <Send className="w-4 h-4 text-[#80d8ff] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  /* Success Feedback Card */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#693bca] to-[#80d8ff] text-white flex items-center justify-center shadow-lg mb-6"
                    >
                      <Check className="w-8 h-8" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-[#19172a] mb-2 tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-[#58536e] max-w-md leading-relaxed mb-3">
                      Thank you for reaching out, <span className="font-semibold text-[#19172a]">{formData.name}</span>. Your message has been sent to{' '}
                      <span className="font-mono text-[#693bca]">{contactData.email}</span>.
                    </p>
                    {!(
                      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
                      'fb726309-d53d-410d-9928-d8860942374a'
                    ) && (
                      <p className="text-[11px] text-[#7a7485] max-w-md leading-relaxed mb-7">
                        First-time setup note: if this is the very first submission, check <span className="font-mono">{contactData.email}</span> (including Spam) once to click FormSubmit&apos;s activation link.
                      </p>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#19172a] text-white text-xs font-mono font-semibold hover:bg-[#693bca] transition-colors shadow-xs"
                    >
                      <span>Send Another Message</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
