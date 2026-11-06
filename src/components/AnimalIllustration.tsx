import { PawPrint, Heart } from "lucide-react";

export default function AnimalIllustration() {
  return (
    <div className="hero-art" aria-label="Illustration of a happy dog and cat">
      <div className="art-sun" />
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <span className="floating-paw paw-one"><PawPrint size={25} /></span>
      <span className="floating-paw paw-two"><PawPrint size={18} /></span>
      <span className="floating-heart"><Heart size={22} fill="currentColor" /></span>
      <div className="animal-sticker dog-sticker" aria-hidden="true">
        <span className="sticker-ear left" />
        <span className="sticker-ear right" />
        <span className="sticker-face">🐶</span>
        <span className="sticker-caption">here to help</span>
      </div>
      <div className="animal-sticker cat-sticker" aria-hidden="true">
        <span className="sticker-face">🐱</span>
        <span className="sticker-caption">little lives matter</span>
      </div>
      <div className="art-ground" />
    </div>
  );
}
