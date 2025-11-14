// client/src/pages/Careers.jsx (UPDATED with UAE Map and Fetch-Ready Structure)

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Heart, Lightbulb } from "lucide-react"; // Added Lucide icons

/**
 * Careers Page
 * - Dynamic job list (currently using static JOBS array but ready for API fetch)
 * - Filterable categories
 * - Modal "Apply" form with CV upload (submits FormData to /api/apply)
 */

// --- STATIC DATA (Replace with useFetch logic when server is ready) ---
const JOBS = [
  {
    id: 1,
    title: "Estimation Engineer (CNC Division)",
    category: "Engineers",
    location: "Ras Al Khaimah, UAE",
    desc:
      "Candidate should have relevant experience in estimation of CNC operations and be fluent in English & Hindi.",
  },
  {
    id: 2,
    title: "Production Engineer",
    category: "Engineers",
    location: "Ras Al Khaimah, UAE",
    desc: "Production floor experience in manufacture/repair of mechanical parts for heavy industries.",
  },
  {
    id: 3,
    title: "Accounts Executive",
    category: "Accounts",
    location: "Ras Al Khaimah, UAE",
    desc: "Responsible for financial control, invoicing, and vendor payments within the manufacturing unit.",
  },
  {
    id: 4,
    title: "Workshop Supervisor",
    category: "Managers",
    location: "Abu Dhabi, UAE",
    desc: "Oversee day-to-day shop activities, ensure safety and quality, and manage manpower.",
  },
];

const categories = ["All", "Engineers", "Managers", "Accounts"];
// --- END STATIC DATA ---

// Benefits for "Why Work With Us" section (using Lucide icons)
const benefits = [
    {
        title: "Growth & Development",
        icon: Briefcase,
        desc: "We invest in our people with training, mentorship and clear career paths.",
    },
    {
        title: "Cutting-Edge Projects",
        icon: Lightbulb,
        desc: "Work on large-scale fabrication, machining & engineering services.",
    },
    {
        title: "Culture & Collaboration",
        icon: Heart,
        desc: "A supportive environment that values teamwork, innovation and safety.",
    },
];


const Careers = () => {
  const [filter, setFilter] = useState("All");
  const [jobs, setJobs] = useState(JOBS); // Start with static data
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Apply form state
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appPhone, setAppPhone] = useState("");
  const [appMessage, setAppMessage] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  useEffect(() => {
    document.title = "Careers | Gulf Engineering";
    
    // TODO: Uncomment the useFetch implementation here when you're ready
    /* const { data, loading, error } = useFetch('/api/jobs');
    if (data) {
        setJobs(data); 
    }
    */
  }, []);

  const filteredJobs = filter === "All" ? jobs : jobs.filter((j) => j.category === filter);

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    // reset form state
    setAppName("");
    setAppEmail("");
    setAppPhone("");
    setAppMessage("");
    setCvFile(null);
    setSubmitSuccess(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  // Basic frontend validation
  const validateForm = () => {
    if (!appName.trim()) return "Please enter your full name.";
    if (!/\S+@\S+\.\S+/.test(appEmail)) return "Please enter a valid email address.";
    if (!appPhone.trim()) return "Please enter your phone number.";
    if (!cvFile) return "Please upload your CV (PDF or DOC).";
    return null;
  };

  // Submit handler (posts to /api/apply - placeholder)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setSubmitSuccess({ ok: false, message: error });
      return;
    }

    setSubmitting(true);
    setSubmitSuccess(null);

    try {
      // Build FormData
      const formData = new FormData();
      formData.append("name", appName);
      formData.append("email", appEmail);
      formData.append("phone", appPhone);
      formData.append("message", appMessage);
      formData.append("jobTitle", selectedJob?.title || "General Application");
      formData.append("cv", cvFile); // The file field name is 'cv'

      // The backend needs to be ready to handle multipart/form-data at /api/apply
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitSuccess({ ok: true, message: "Application submitted successfully. We'll be in touch." });
        // optionally close modal after short delay
        setTimeout(() => {
          setSubmitting(false);
          closeModal();
        }, 1400);
      } else {
        // Try to parse server message
        const json = await res.json().catch(() => null);
        setSubmitSuccess({ ok: false, message: json?.message || "Failed to submit. Please try again later." });
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setSubmitSuccess({ ok: false, message: "Network error. Please try again later." });
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* HERO */}
      <header className="relative bg-navy text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1920')] bg-cover bg-center"
          aria-hidden
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Careers at RAK Engineering
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            Join our growing team — work on cutting-edge fabrication, machining, and engineering projects across the region.
          </motion.p>
        </div>
      </header>

      {/* FILTER BAR */}
      <section className="py-10 bg-off-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-accent-orange text-white shadow-md"
                    : "bg-white text-text-dark hover:bg-accent-orange hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-sm text-text-dark">
            <strong>{filteredJobs.length}</strong> open position{filteredJobs.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <motion.article
                key={job.id}
                className="p-8 bg-white rounded-2xl shadow-lg border-l-4 border-accent-orange hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy">{job.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="mr-4">Category: <span className="font-medium text-text-dark">{job.category}</span></span>
                      <span>Location: <span className="font-medium text-text-dark">{job.location}</span></span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => openApplyModal(job)}
                      className="px-5 py-2 bg-accent-orange text-white rounded-full font-medium shadow hover:bg-orange-600 transition"
                    >
                      Apply Now
                    </button>
                    {/* Simplified View Details to show desc directly */}
                    <div className="text-sm text-gray-700 leading-relaxed md:hidden">
                        {job.desc}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-gray-700 leading-relaxed hidden md:block">
                  {job.desc}
                </div>
              </motion.article>
            ))
          ) : (
            <div className="text-center py-10 text-lg text-text-dark">
                No open positions match the current filter.
            </div>
          )}
        </div>
      </section>

      {/* WHY WORK WITH US (UPDATED to include Map) */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Why Work With Us
          </motion.h2>

          <div className="grid lg:grid-cols-5 gap-10 mt-10">
            
            {/* 1. Map Image - NEW ELEMENT */}
            <motion.div
                className="lg:col-span-2 p-6 bg-white text-navy rounded-xl shadow-lg flex flex-col items-center justify-center border-b-4 border-accent-orange"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <MapPin className="w-10 h-10 text-accent-orange mb-3" />
                <h4 className="text-xl font-semibold mb-2">Operational Footprint</h4>
                {/* Reference the image from the public folder */}
                <img
                    src="/UAE map.png" 
                    alt="UAE Map showing locations"
                    className="w-full max-h-64 object-contain rounded-lg mt-3"
                />
            </motion.div>

            {/* 2. Benefits Grid */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {benefits.map((it, i) => {
                const Icon = it.icon; // Use the Lucide icon component
                return (
                  <motion.div
                    key={i}
                    className="p-6 bg-white text-navy rounded-xl shadow-lg hover:shadow-2xl transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
                  >
                    <Icon className="w-8 h-8 text-accent-orange mb-3 mx-auto" />
                    <h4 className="text-lg font-semibold mb-2">{it.title}</h4>
                    <p className="text-gray-700 text-sm">{it.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA / APPLY INFO */}
      <section className="py-12 bg-off-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-navy mb-3">Can't find a role?</h3>
          <p className="text-text-dark mb-6">Send your CV to <a href="mailto:careers@gellc.ae" className="text-accent-orange font-medium">careers@gellc.ae</a> — we keep resumes on file for upcoming roles.</p>
          <button
            onClick={() => {
              openApplyModal({ id: 0, title: "General Application" });
            }}
            className="px-6 py-3 bg-accent-orange text-white rounded-full font-medium shadow hover:bg-orange-600 transition"
          >
            Send Your CV
          </button>
        </div>
      </section>

      {/* ===== Apply Modal (Retained) ===== */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => !submitting && closeModal()}
          />

          <motion.div
            className="relative z-20 w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-5 border-b">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-navy">
                  Apply: {selectedJob?.title}
                </h4>
                <button
                  className="text-text-dark"
                  onClick={() => !submitting && closeModal()}
                >
                  ✕
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {submitSuccess && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    submitSuccess.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitSuccess.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={appEmail}
                  onChange={(e) => setAppEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={appPhone}
                  onChange={(e) => setAppPhone(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md"
                  required
                />
                <select
                  value={selectedJob?.id || ""}
                  onChange={(e) => {
                    const jobId = Number(e.target.value);
                    const j = jobs.find((x) => x.id === jobId) || { id: 0, title: "General Application" };
                    setSelectedJob(j);
                  }}
                  className="w-full px-4 py-3 border rounded-md"
                >
                  <option value={selectedJob?.id || ""}>
                    {selectedJob?.title || "Select role"}
                  </option>
                  <option value={0}>General Application</option>
                  {jobs.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload CV (PDF / DOC)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                  className="w-full"
                />
              </div>

              <div>
                <textarea
                  placeholder="Brief message (optional)"
                  value={appMessage}
                  onChange={(e) => setAppMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 border rounded-md"
                />
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => !submitting && closeModal()}
                  className="px-5 py-2 rounded-md border"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent-orange text-white rounded-md font-medium shadow"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Submit Application"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Careers;