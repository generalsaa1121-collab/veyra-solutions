import { useState } from 'react';
import { motion } from 'framer-motion';
import { BAND } from '../data/content';

const WHY_CHOOSE = [
  { title: 'Unmatched Repertoire', desc: '50+ songs across five decades — from classics to current chart-toppers.' },
  { title: 'Two Lead Vocalists', desc: 'Powerful male and female vocalists who can handle any genre flawlessly.' },
  { title: 'Fully Self-Contained', desc: 'Professional sound system, lighting rig, and stage setup included.' },
  { title: 'Custom Set Planning', desc: 'We work with you to craft the perfect setlist for your specific event.' },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  guestCount: string;
  message: string;
};

export default function Booking() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venue: '',
    guestCount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Book The Cliffs
          </h2>
          <p className="text-white/50 font-body text-base max-w-lg mx-auto">
            Ready to make your event unforgettable? Send us an inquiry and we'll be in touch within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact info + why choose */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Contact details */}
            <div className="mb-10">
              <h3 className="font-display text-white text-2xl md:text-3xl mb-6">
                Let's Talk About Your Event
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${BAND.email}`}
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-cliffs-pink/10 border border-cliffs-pink/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cliffs-pink/20 transition-colors">
                    <svg className="w-5 h-5 text-cliffs-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">Email</p>
                    <p className="font-body">{BAND.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${BAND.phone}`}
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-cliffs-pink/10 border border-cliffs-pink/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cliffs-pink/20 transition-colors">
                    <svg className="w-5 h-5 text-cliffs-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">Phone</p>
                    <p className="font-body">{BAND.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-white/70">
                  <div className="w-12 h-12 rounded-xl bg-cliffs-pink/10 border border-cliffs-pink/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cliffs-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">Service Area</p>
                    <p className="font-body">{BAND.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why choose */}
            <div>
              <h4 className="font-display text-white text-xl mb-5 tracking-wide">Why Choose The Cliffs</h4>
              <div className="flex flex-col gap-4">
                {WHY_CHOOSE.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cliffs-pink mt-2.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-white font-semibold font-body text-sm mb-0.5">{item.title}</p>
                      <p className="text-white/50 font-body text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="p-10 rounded-2xl border border-cliffs-pink/20 text-center" style={{ backgroundColor: '#1A1A1A' }}>
                <div className="w-16 h-16 rounded-full bg-cliffs-pink/10 border border-cliffs-pink/30 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-cliffs-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-white text-2xl mb-3">Inquiry Sent!</h3>
                <p className="text-white/60 font-body text-base">
                  Thank you for reaching out. We'll be in touch within 24 hours to discuss your event.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-white/8"
                style={{ backgroundColor: '#1A1A1A' }}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm text-white/60 font-body mb-1.5">
                      Full Name <span className="text-cliffs-pink" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 font-body mb-1.5">
                      Email <span className="text-cliffs-pink" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm text-white/60 font-body mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label htmlFor="eventType" className="block text-sm text-white/60 font-body mb-1.5">
                      Event Type <span className="text-cliffs-pink" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#1A1A1A] text-white text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200 cursor-pointer"
                    >
                      <option value="" disabled>Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Private">Private Party</option>
                      <option value="Gala">Gala / Fundraiser</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label htmlFor="eventDate" className="block text-sm text-white/60 font-body mb-1.5">
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200 [color-scheme:dark]"
                    />
                  </div>

                  {/* Venue */}
                  <div>
                    <label htmlFor="venue" className="block text-sm text-white/60 font-body mb-1.5">
                      Venue / Location
                    </label>
                    <input
                      id="venue"
                      name="venue"
                      type="text"
                      value={form.venue}
                      onChange={handleChange}
                      placeholder="The Plaza Hotel, NYC"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label htmlFor="guestCount" className="block text-sm text-white/60 font-body mb-1.5">
                      Estimated Guest Count
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={form.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#1A1A1A] text-white text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200 cursor-pointer"
                    >
                      <option value="">Select range</option>
                      <option value="under50">Under 50</option>
                      <option value="50-100">50–100</option>
                      <option value="100-200">100–200</option>
                      <option value="200-300">200–300</option>
                      <option value="300+">300+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm text-white/60 font-body mb-1.5">
                      Tell Us About Your Event
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event vision, any special song requests, or questions you have..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full py-4 bg-cliffs-pink text-white font-semibold text-base rounded-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 font-body"
                  whileHover={!loading ? { scale: 1.02, boxShadow: '0 0 30px rgba(255,45,120,0.4)' } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Inquiry'
                  )}
                </motion.button>

                <p className="text-center text-white/30 text-xs font-body mt-4">
                  We typically respond within 24 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
