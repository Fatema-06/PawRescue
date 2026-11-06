"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Camera, CheckCircle2, MapPin, Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { addReport } from "@/lib/reports";
import type { AnimalType } from "@/types";

export default function ReportPage() {
  const router = useRouter();
  const fileInput = useRef<HTMLInputElement>(null);
  const [animal, setAnimal] = useState<AnimalType>("Dog");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [locating, setLocating] = useState(false);

  function handleImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("Please choose an image file."); return; }
    if (file.size > 2 * 1024 * 1024) { setError("Please choose an image smaller than 2 MB for this demo."); return; }
    const reader = new FileReader();
    reader.onload = () => { setImage(String(reader.result)); setImageName(file.name); setError(""); };
    reader.readAsDataURL(file);
  }

  function useMyLocation() {
    if (!navigator.geolocation) { setError("Location is not supported by this browser. Please type the location."); return; }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(`${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}`);
        setLocating(false);
      },
      () => { setError("We couldn't access your location. You can enter it manually."); setLocating(false); },
      { enableHighAccuracy: false, timeout: 8000 }
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !description.trim() || !location.trim()) { setError("Please complete all required fields."); return; }
    const reportImage = image || (animal === "Cat"
      ? "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85"
      : "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=900&q=85");
    addReport({
      id: `report-${Date.now()}`, animal, title: title.trim(), description: description.trim(),
      location: location.trim(), image: reportImage, status: "Needs help", createdAt: "Just now",
    });
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (success) {
    return (
      <section className="form-page">
        <div className="container narrow-container">
          <div className="success-card">
            <div className="success-icon"><CheckCircle2 size={38} /></div>
            <span className="eyebrow">REPORT SAVED</span>
            <h1>Thank you for speaking up.</h1>
            <p>Your report has been added to this browser’s PawRescue community feed. Your kindness could help someone find this animal.</p>
            <div className="success-actions"><Link href="/#reports" className="button">View community reports</Link><button className="button button-outline" onClick={() => router.push("/report")}>Create another report</button></div>
            <span className="demo-note">Demo note: this report is saved locally on this device, not sent to a rescue team.</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page">
      <div className="container narrow-container">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to home</Link>
        <div className="form-intro"><span className="eyebrow">YOUR VOICE CAN HELP</span><h1>Report an animal in need</h1><p>Share what you saw. A clear photo and location can help the community understand where support may be needed.</p></div>
        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-section-title"><span>01</span><div><h2>About the animal</h2><p>Tell us a little about who needs help.</p></div></div>
          <label className="field-label">What kind of animal did you see? <span>*</span></label>
          <div className="animal-options">
            {(["Dog", "Cat", "Other"] as AnimalType[]).map((type) => (
              <button type="button" key={type} className={`animal-option ${animal === type ? "animal-option-active" : ""}`} onClick={() => setAnimal(type)}>
                <span>{type === "Dog" ? "🐶" : type === "Cat" ? "🐱" : "🐾"}</span>{type}
              </button>
            ))}
          </div>
          <label className="field-label" htmlFor="title">Report title <span>*</span></label>
          <input id="title" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Injured dog near the park" maxLength={80} required />
          <label className="field-label" htmlFor="description">What happened? <span>*</span></label>
          <textarea id="description" className="form-input form-textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the animal and what kind of help they may need..." rows={4} maxLength={500} required />
          <div className="char-count">{description.length}/500</div>

          <div className="form-divider" />
          <div className="form-section-title"><span>02</span><div><h2>Photo & location</h2><p>These details help others identify the place.</p></div></div>
          <label className="field-label">Add a photo <small>(optional, max 2 MB)</small></label>
          <input ref={fileInput} type="file" accept="image/*" className="visually-hidden" onChange={handleImage} />
          {image ? (
            <div className="upload-preview">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="Selected animal preview" />
              <div><strong>{imageName}</strong><small>Ready to attach</small></div>
              <button type="button" className="remove-image" aria-label="Remove image" onClick={() => { setImage(""); setImageName(""); if (fileInput.current) fileInput.current.value = ""; }}><X size={17} /></button>
            </div>
          ) : (
            <button type="button" className="upload-zone" onClick={() => fileInput.current?.click()}>
              <span className="upload-icon"><Camera size={22} /></span><strong>Choose an image</strong><span>Tap to upload a photo from your device</span>
            </button>
          )}
          <label className="field-label" htmlFor="location">Where did you see the animal? <span>*</span></label>
          <div className="location-input-wrap"><MapPin size={18} /><input id="location" className="form-input" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Street, area, or a nearby landmark" required /></div>
          <button type="button" className="location-button" onClick={useMyLocation} disabled={locating}><MapPin size={15} />{locating ? "Finding location..." : "Use my current location"}</button>
          <div className="privacy-note"><span>🔒</span><p>Only share a location you’re comfortable making visible to the community. Please keep a safe distance from distressed animals.</p></div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" className="button submit-button"><Upload size={17} /> Submit report</button>
          <p className="form-footnote">This demo saves reports in your browser only. It does not contact emergency services or a rescue organization.</p>
        </form>
      </div>
    </section>
  );
}
