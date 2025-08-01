import {
  Dumbbell,
  GlassWater,
  Sparkles,
  Salad,
  Leaf,
  Carrot,
  Beef,
} from "lucide-react";

// Note: Hamburger icon doesn't exist in lucide-react, using Beef as substitute
const Hamburger = Beef;

export default function HeroDoodles() {
  return (
    <div className="hero-doodles">
      <Dumbbell className="doodle doodle-1" />
      <GlassWater className="doodle doodle-2" />
      <Sparkles className="doodle doodle-3" />
      <Salad className="doodle doodle-4" />
      <Leaf className="doodle doodle-5" />
      <Carrot className="doodle doodle-6" />
      <Hamburger className="doodle doodle-7" />
      <Beef className="doodle doodle-8" />

      {/* Repeat icons for more coverage */}
      <Sparkles className="doodle doodle-9" />
      <Dumbbell className="doodle doodle-10" />
      <Leaf className="doodle doodle-11" />
      <GlassWater className="doodle doodle-12" />
      <Carrot className="doodle doodle-13" />
      <Salad className="doodle doodle-14" />
      <Hamburger className="doodle doodle-15" />
      <Beef className="doodle doodle-16" />
      <Sparkles className="doodle doodle-17" />
      <Leaf className="doodle doodle-18" />
    </div>
  );
}
