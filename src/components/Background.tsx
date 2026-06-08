import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.08), transparent 45%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.08), transparent 40%)",
        }}
      />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute -top-32 -left-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "rgba(34,211,238,0.18)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "rgba(168,85,247,0.16)" }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgba(59,130,246,0.14)" }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
