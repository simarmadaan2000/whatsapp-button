// ####### Final version
// import { useEffect } from "react";
// export default function App() {
//   const phone = "15551234567"; // Replace with your number
//   const message = "Hello, I’d like to know more about your services!";

//   const handleWhatsAppClick = () => {
//     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "420px", // Mobile card width
//         margin: "20px auto",
//         minHeight: "90vh",
//         display: "flex",
//         flexDirection: "column",
//         background: "linear-gradient(to bottom, #ffffff, #f7f9fc)",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         borderRadius: "16px",
//         border: "1px solid #e5e5e5",
//         boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//         overflow: "hidden",
//       }}
//     >
//       {/* Header */}
//       <header
//         style={{
//           background: "linear-gradient(135deg, #25D366, #128C7E)",
//           color: "white",
//           padding: "18px",
//           fontSize: "22px",
//           fontWeight: "600",
//           textAlign: "center",
//           letterSpacing: "0.5px",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
//         }}
//       >
//         ✨ Krishna Massage Services
//       </header>

//       {/* Body */}
//       <main
//         style={{
//           flex: 1,
//           padding: "24px",
//           fontSize: "16px",
//           color: "#444",
//           lineHeight: "1.7",
//         }}
//       >
//         <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>
//           Welcome 🙏
//         </h2>
//         <p>
//           At <strong>Krishna Massage Services</strong>, we bring relaxation and
//           rejuvenation to your home in Delhi NCR. Enjoy soothing therapies designed
//           to release stress and restore balance to your body and mind.
//         </p>
//         <p style={{ marginTop: "16px", fontSize: "15px", color: "#555" }}>
//           📞 Book your session now:{" "}
//           <strong style={{ color: "#128C7E" }}>{phone}</strong>
//         </p>
//       </main>

//       {/* Floating WhatsApp Button */}
//       <button
//         onClick={handleWhatsAppClick}
//         style={{
//           position: "fixed",
//           bottom: "24px",
//           right: "24px",
//           backgroundColor: "#25D366",
//           border: "none",
//           borderRadius: "50%",
//           width: "64px",
//           height: "64px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
//           transition: "transform 0.2s ease, box-shadow 0.2s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.1)";
//           e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//           e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
//         }}
//       >
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//           alt="WhatsApp"
//           style={{ width: "34px", height: "34px" }}
//         />
//       </button>
//     </div>
//   );
// }

// using Final2

import { useEffect } from "react";

export default function App() {
  const phone = "9414820959"; // Replace with your number
  const message = "Hello, I’d like to know more about your services!";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "20px auto",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #ffffff, #f9fbfd)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        borderRadius: "20px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          color: "white",
          padding: "20px",
          fontSize: "22px",
          fontWeight: "600",
          textAlign: "center",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        ✨ Krishna Massage Services
      </header>

      {/* Body */}
      <main
        style={{
          flex: 1,
          padding: "28px",
          fontSize: "16px",
          color: "#2d3748",
          lineHeight: "1.75",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "14px",
            color: "#1a202c",
          }}
        >
          Welcome 🙏
        </h2>
        <p style={{ marginBottom: "12px" }}>
          At <strong>Krishna Massage Services</strong>, we bring relaxation and
          rejuvenation to your home in <strong>Gurugram and jaipur city</strong>. Enjoy soothing therapies at your home
          designed to release stress and restore balance to your body and mind.
        </p>
        <p
          style={{
            marginTop: "18px",
            fontSize: "15px",
            color: "#4a5568",
            background: "#f0fdfa",
            padding: "12px 16px",
            borderRadius: "12px",
            border: "1px solid #c6f6d5",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          📞 Book your session now:{" "}
          <strong style={{ color: "#128C7E" }}>{phone}</strong>
        </p>
      </main>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          backgroundColor: "#25D366",
          border: "none",
          borderRadius: "50%",
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.12)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.25)";
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "36px", height: "36px" }}
        />
      </button>
    </div>
  );
}

