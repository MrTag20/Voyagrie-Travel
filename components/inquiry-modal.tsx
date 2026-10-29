"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Plane, Calendar, Users, MapPin } from "lucide-react";
import { destinationsList } from "@/data/travel-content";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
  defaultPackage?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultDestination = "",
  defaultPackage = "",
}) => {
  const [destination, setDestination] = useState(defaultDestination);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [duration, setDuration] = useState("7-10 Days");
  const [travellers, setTravellers] = useState("2 Travellers");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFFCF5] rounded-3xl border border-[#DCD4C6] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EEE8DC] hover:bg-[#DCD4C6] text-[#152F29] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#173B32]/10 text-[#173B32] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-3xl font-medium text-[#152F29] mb-2">
              Journey Request Received
            </h3>
            <p className="text-sm text-[#4A514B] mb-6 max-w-sm mx-auto">
              Thank you, {name || "traveller"}! A Voyagrie senior travel
              specialist will review your personalized itinerary and reach out
              shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#173B32] text-white text-xs font-semibold cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEE8DC] text-[10px] uppercase font-bold text-[#BE6543] tracking-widest mb-2">
                BESPOKE CONCIERGE
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#152F29]">
                Plan Your Tailored Journey
              </h3>
              <p className="text-xs text-[#686B64] mt-1">
                Tell us your dream vacation and our local destination curators
                will tailor your itinerary.
              </p>
              {defaultPackage && (
                <div className="mt-3 p-2.5 rounded-xl bg-[#EEE8DC]/70 border border-[#DCD4C6] text-xs text-[#173B32] font-semibold flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#BE6543]" />
                  <span>Selected Experience: {defaultPackage}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#152F29] mb-1">
                  Destination
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={destination || defaultDestination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Bali, Switzerland, Japan, Maldives..."
                    required
                    className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#F7F4EC] border border-[#DCD4C6] text-xs font-medium text-[#152F29] focus:outline-none focus:border-[#BE6543]"
                  />
                  <MapPin className="w-4 h-4 text-[#BE6543] absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#152F29] mb-1">
                    Duration
                  </label>
                  <div className="relative">
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full h-11 pl-9 pr-3 rounded-xl bg-[#F7F4EC] border border-[#DCD4C6] text-xs font-medium text-[#152F29] focus:outline-none focus:border-[#BE6543]"
                    >
                      <option>3 - 5 Days</option>
                      <option>7 - 10 Days</option>
                      <option>10 - 14 Days</option>
                      <option>15+ Days</option>
                    </select>
                    <Calendar className="w-4 h-4 text-[#BE6543] absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#152F29] mb-1">
                    Travellers
                  </label>
                  <div className="relative">
                    <select
                      value={travellers}
                      onChange={(e) => setTravellers(e.target.value)}
                      className="w-full h-11 pl-9 pr-3 rounded-xl bg-[#F7F4EC] border border-[#DCD4C6] text-xs font-medium text-[#152F29] focus:outline-none focus:border-[#BE6543]"
                    >
                      <option>1 Traveller (Solo)</option>
                      <option>2 Travellers (Couple)</option>
                      <option>3 - 4 Travellers (Family)</option>
                      <option>5+ Travellers (Group)</option>
                    </select>
                    <Users className="w-4 h-4 text-[#BE6543] absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#152F29] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full h-11 px-4 rounded-xl bg-[#F7F4EC] border border-[#DCD4C6] text-xs font-medium text-[#152F29] focus:outline-none focus:border-[#BE6543]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#152F29] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    required
                    className="w-full h-11 px-4 rounded-xl bg-[#F7F4EC] border border-[#DCD4C6] text-xs font-medium text-[#152F29] focus:outline-none focus:border-[#BE6543]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#152F29] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full h-11 px-4 rounded-xl bg-[#F7F4EC] border border-[#DCD4C6] text-xs font-medium text-[#152F29] focus:outline-none focus:border-[#BE6543]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-[#173B32] text-white text-xs font-semibold tracking-wide hover:bg-[#092B25] transition-all duration-200 shadow-md cursor-pointer"
                >
                  Request Custom Itinerary
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
