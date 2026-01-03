"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Upload, Loader2, CheckCircle2 } from "lucide-react";
import {
  useApplyForJobMutation,
  ApplicationRequest,
} from "@/lib/api/careers-api";

interface CareerApplicationFormProps {
  jobId: number;
  jobTitle: string;
  onClose: () => void;
  onSuccess: () => void;
}

export function CareerApplicationForm({
  jobId,
  jobTitle,
  onClose,
  onSuccess,
}: CareerApplicationFormProps) {
  const [formData, setFormData] = useState<ApplicationRequest>({
    full_name: "",
    email: "",
    phone_number: "",
    resume: "",
    cover_letter_text: "",
    cover_letter_file: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [applyForJob, { isLoading: submitting }] = useApplyForJobMutation();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "resume" | "coverLetter"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "resume") {
        setResumeFile(file);
        // Convert file to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            resume: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
      } else {
        setCoverLetterFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            cover_letter_file: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await applyForJob({
        jobId,
        application: formData,
      }).unwrap();
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
      >
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">
          Application Submitted!
        </h3>
        <p className="text-green-700">
          Thank you for your interest. We'll review your application and get
          back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-200 rounded-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-black">Apply for {jobTitle}</h3>
          <p className="text-gray-600 text-sm mt-1">
            Please fill out the form below to submit your application.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="full_name"
              className="block text-sm font-semibold text-black mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone_number"
            className="block text-sm font-semibold text-black mb-2"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-semibold text-black mb-2"
          >
            Resume (PDF, DOC, DOCX) *
          </label>
          <div className="relative">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "resume")}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {resumeFile && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {resumeFile.name}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="cover_letter_text"
            className="block text-sm font-semibold text-black mb-2"
          >
            Cover Letter *
          </label>
          <textarea
            id="cover_letter_text"
            name="cover_letter_text"
            value={formData.cover_letter_text}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Tell us why you're interested in this position..."
          />
        </div>

        <div>
          <label
            htmlFor="cover_letter_file"
            className="block text-sm font-semibold text-black mb-2"
          >
            Cover Letter File (Optional)
          </label>
          <div className="relative">
            <input
              type="file"
              id="cover_letter_file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "coverLetter")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {coverLetterFile && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {coverLetterFile.name}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="flex-1 px-6 py-3 bg-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
