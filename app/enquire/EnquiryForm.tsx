"use client";

import { useState, FormEvent } from "react";
import { 
  CheckCircle, 
  MessageCircle, 
  Send, 
  Loader2, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft,
  User,
  GraduationCap,
  Target,
  FileText,
  Smartphone,
  Mail,
  Home,
  Monitor
} from "lucide-react";

interface FormData {
  parentName: string;
  phone: string;
  whatsAppSameAsPhone: boolean;
  whatsAppNumber: string;
  email: string;
  studentName: string;
  grade: string;
  schoolBoard: string;
  courseType: string;
  mode: string;
  studentLevel: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  phone?: string;
  studentName?: string;
  grade?: string;
  courseType?: string;
  mode?: string;
}

const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"];
const schoolBoards = ["CBSE", "ICSE", "SSC", "IGCSE", "IB", "Other"];

const courseTypes = [
  { value: "regular", label: "Regular Maths", description: "Academic excellence and school curriculum support", icon: GraduationCap },
  { value: "olympiad", label: "Olympiad Prep", description: "Advanced concepts for competitive mathematics", icon: Target },
  { value: "mental", label: "Mental Maths", description: "Speed, accuracy and cognitive development", icon: MessageCircle },
  { value: "not-sure", label: "Not Sure Yet", description: "Get guidance from Shraddha to decide", icon: FileText },
];

const modes = [
  { value: "online", label: "Online Live", description: "Interactive classes from anywhere", icon: Monitor },
  { value: "offline", label: "Offline Centre", description: "Personalized coaching at Kanjurmarg", icon: Home },
];

const studentLevels = [
  { value: "needs-improvement", label: "Needs Help", description: "Lacks confidence or basics" },
  { value: "average", label: "Average", description: "Doing okay but can do better" },
  { value: "strong", label: "Strong", description: "Advanced and wants challenge" },
];

export default function EnquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    phone: "",
    whatsAppSameAsPhone: true,
    whatsAppNumber: "",
    email: "",
    studentName: "",
    grade: "",
    schoolBoard: "",
    courseType: "",
    mode: "",
    studentLevel: "average",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Steps configuration
  const steps = [
    { id: 1, title: "Parent Details", icon: User },
    { id: 2, title: "Student Info", icon: GraduationCap },
    { id: 3, title: "Learning Goals", icon: Target },
    { id: 4, title: "Final Step", icon: FileText },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      if (!formData.parentName.trim()) newErrors.parentName = "Parent name is required";
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Enter a valid 10-digit number";
      }
    }
    
    if (step === 2) {
      if (!formData.studentName.trim()) newErrors.studentName = "Student name is required";
      if (!formData.grade) newErrors.grade = "Please select a grade";
    }

    if (step === 3) {
      if (!formData.courseType) newErrors.courseType = "Select a course type";
      if (!formData.mode) newErrors.mode = "Select a learning mode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsAnimating(false);
        const formElement = document.getElementById("form");
        if (formElement) {
          window.scrollTo({ top: formElement.offsetTop - 100, behavior: "smooth" });
        }
      }, 300);
    }
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep((prev) => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");
      setIsSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const whatsappLink = `https://wa.me/919969174811?text=${encodeURIComponent(
    `Hi, I'm ${formData.parentName}. I'm interested in ${formData.courseType} classes for my child ${formData.studentName} (${formData.grade}).`
  )}`;

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center border border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-4">
          Enquiry Received!
        </h2>
        <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
          Thank you for reaching out. Shraddha will review your details and contact you within 24 hours to schedule a consultation.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Priority WhatsApp
          </a>
          <a
            href="/"
            className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-2xl font-bold transition-all"
          >
            Back to Home
          </a>
        </div>
        
        <p className="text-sm text-gray-400">
          A confirmation has been sent to your records.
        </p>
      </div>
    );
  }

  return (
    <div id="form" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500">
      {/* Progress Header */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-8 sm:px-10">
        <div className="flex items-center justify-between relative mb-8">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-accent -translate-y-1/2 z-0 transition-all duration-500" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step) => {
            const StepIcon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? "bg-accent text-white ring-4 ring-red-100 scale-110 shadow-lg" 
                      : isCompleted 
                        ? "bg-primary text-white" 
                        : "bg-white border-2 border-gray-200 text-gray-400"
                  }`}
                >
                  {isCompleted ? <CheckCircle className="w-6 h-6" /> : <StepIcon className="w-5 h-5" />}
                </div>
                <span className={`absolute -bottom-7 text-[10px] sm:text-xs font-bold whitespace-nowrap transition-colors duration-300 ${isActive ? "text-accent" : "text-gray-400"}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`p-6 sm:p-10 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        <form onSubmit={handleSubmit} className="space-y-8">
          {submitError && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{submitError}</p>
            </div>
          )}

          {/* STEP 1: Parent Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Let's get started</h3>
                <p className="text-gray-500">Please provide your contact information so we can reach out to you.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="group">
                  <label htmlFor="parentName" className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-accent">
                    Parent Full Name <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent transition-colors" />
                    <input
                      type="text"
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleChange("parentName", e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-lg ${
                        errors.parentName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-primary focus:bg-white"
                      }`}
                      placeholder="e.g. Rajesh Kumar"
                    />
                  </div>
                  {errors.parentName && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.parentName}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-accent">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent transition-colors" />
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-lg ${
                          errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-primary focus:bg-white"
                        }`}
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    {errors.phone && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-accent">
                      Email Address <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent transition-colors" />
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 flex items-start gap-4">
                  <div className="relative flex items-center justify-center mt-1">
                    <input
                      type="checkbox"
                      id="whatsAppSameAsPhone"
                      checked={formData.whatsAppSameAsPhone}
                      onChange={(e) => handleChange("whatsAppSameAsPhone", e.target.checked)}
                      className="w-5 h-5 text-accent border-gray-300 rounded-lg focus:ring-accent accent-accent cursor-pointer"
                    />
                  </div>
                  <label htmlFor="whatsAppSameAsPhone" className="text-sm text-gray-600 cursor-pointer select-none">
                    <span className="font-bold text-primary block mb-0.5">Use same number for WhatsApp</span>
                    Important for receiving class schedules and study materials.
                  </label>
                </div>

                {!formData.whatsAppSameAsPhone && (
                  <div className="group animate-in slide-in-from-top-2 duration-300">
                    <label htmlFor="whatsAppNumber" className="block text-sm font-bold text-gray-700 mb-2">
                      WhatsApp Number
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="whatsAppNumber"
                        value={formData.whatsAppNumber}
                        onChange={(e) => handleChange("whatsAppNumber", e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-lg"
                        placeholder="WhatsApp number"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: Student Information */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Tell us about your child</h3>
                <p className="text-gray-500">This helps us understand which batch would be the best fit.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="group">
                  <label htmlFor="studentName" className="block text-sm font-bold text-gray-700 mb-2">
                    Student Full Name <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => handleChange("studentName", e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-lg ${
                        errors.studentName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-primary focus:bg-white"
                      }`}
                      placeholder="e.g. Aarav Kumar"
                    />
                  </div>
                  {errors.studentName && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.studentName}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="grade" className="block text-sm font-bold text-gray-700 mb-2">
                      Grade / Class <span className="text-accent">*</span>
                    </label>
                    <select
                      id="grade"
                      value={formData.grade}
                      onChange={(e) => handleChange("grade", e.target.value)}
                      className={`w-full px-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-lg appearance-none cursor-pointer ${
                        errors.grade ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-primary focus:bg-white"
                      }`}
                    >
                      <option value="">Select Grade</option>
                      {grades.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                    {errors.grade && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.grade}</p>}
                  </div>

                  <div>
                    <label htmlFor="schoolBoard" className="block text-sm font-bold text-gray-700 mb-2">
                      School Board <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <select
                      id="schoolBoard"
                      value={formData.schoolBoard}
                      onChange={(e) => handleChange("schoolBoard", e.target.value)}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-lg appearance-none cursor-pointer"
                    >
                      <option value="">Select Board</option>
                      {schoolBoards.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Goals & Learning */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Tailor the experience</h3>
                <p className="text-gray-500">Choose the options that best match your requirements.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">
                  Which course are you interested in? <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {courseTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = formData.courseType === type.value;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleChange("courseType", type.value)}
                        className={`flex flex-col items-start p-5 rounded-2xl border-2 text-left transition-all ${
                          isSelected 
                            ? "border-accent bg-red-50 shadow-md ring-4 ring-red-50" 
                            : "border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white"
                        }`}
                      >
                        <div className={`p-2 rounded-xl mb-3 ${isSelected ? "bg-accent text-white" : "bg-white text-gray-400 border border-gray-100"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`font-bold block mb-1 ${isSelected ? "text-accent" : "text-primary"}`}>{type.label}</span>
                        <span className="text-xs text-gray-500 leading-relaxed">{type.description}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.courseType && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.courseType}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-4">
                    Preferred Mode <span className="text-accent">*</span>
                  </label>
                  <div className="flex flex-col gap-3">
                    {modes.map((m) => {
                      const Icon = m.icon;
                      const isSelected = formData.mode === m.value;
                      return (
                        <button
                          key={m.value}
                          type="button"
                          onClick={() => handleChange("mode", m.value)}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                            isSelected 
                              ? "border-primary bg-blue-50/30 ring-4 ring-blue-50" 
                              : "border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white"
                          }`}
                        >
                          <div className={`p-2 rounded-xl ${isSelected ? "bg-primary text-white" : "bg-white text-gray-400"}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className={`font-bold block text-sm ${isSelected ? "text-primary" : "text-gray-700"}`}>{m.label}</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">{m.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.mode && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.mode}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-4">
                    Current Student Level
                  </label>
                  <div className="flex flex-col gap-3">
                    {studentLevels.map((l) => {
                      const isSelected = formData.studentLevel === l.value;
                      return (
                        <button
                          key={l.value}
                          type="button"
                          onClick={() => handleChange("studentLevel", l.value)}
                          className={`flex flex-col p-4 rounded-2xl border-2 text-left transition-all ${
                            isSelected 
                              ? "border-primary bg-blue-50/30 ring-4 ring-blue-50" 
                              : "border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white"
                          }`}
                        >
                          <span className={`font-bold block text-sm ${isSelected ? "text-primary" : "text-gray-700"}`}>{l.label}</span>
                          <span className="text-[10px] text-gray-500">{l.description}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Additional Information */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Final touches</h3>
                <p className="text-gray-500">Any specific concerns or questions you'd like to mention?</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message / Special Requirements <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-lg resize-none"
                    placeholder="e.g. My child struggles with word problems and needs extra attention in fractions..."
                  />
                </div>

                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Ready to submit?
                  </h4>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    By submitting, you agree to receive a callback and messages regarding class details. We respect your privacy and never share your data.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-gray-500 hover:text-primary hover:bg-gray-100 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
