import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// 🎬 Youtube videos (YouTube Embed) — n0ODwNevZiQ Removed
const longFormVideos = [
  {
    id: 2,
    title: "",
    url: "https://www.youtube.com/embed/OogbU5ywldE",
    aspect: "16:9",
  },
  {
    id: 3,
    title: "",
    url: "https://www.youtube.com/embed/f9uxiGtqDGw",
    aspect: "16:9",
  },
  {
    id: 4,
    title: "",
    url: "https://www.youtube.com/embed/58TGXxjsemk",
    aspect: "16:9",
  },
  {
    id: 5,
    title: "",
    url: "https://www.youtube.com/embed/yUGHKxN-PM0",
    aspect: "16:9",
  },
  {
    id: 6,
    title: "",
    url: "https://www.youtube.com/embed/463AHJh4Hbo",
    aspect: "16:9",
  },
];

// 📱 Reels and Shorts (YouTube Shorts Embed)
const shortFormVideos = [
  {
    id: 1,
    title: "",
    url: "https://www.youtube.com/embed/PZh3c0Yym0U",
    aspect: "9:16",
  },
  {
    id: 2,
    title: "",
    url: "https://www.youtube.com/embed/d-si2HKCnxo",
    aspect: "9:16",
  },
  {
    id: 3,
    title: "",
    url: "https://www.youtube.com/embed/oSD_Gx7YTms",
    aspect: "9:16",
  },
  {
    id: 4,
    title: "",
    url: "https://www.youtube.com/embed/9Csnm6eURtc",
    aspect: "9:16",
  },
];

// 🧩 Video Card Component
const VideoCard = ({ url, title, aspect }) => {
  const paddingTop = aspect === "9:16" ? "177.78%" : "56.25%";
  const maxWidth = aspect === "9:16" ? "240px" : "360px";

  return (
    <div style={{ width: "100%", maxWidth }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop,
          overflow: "hidden",
          borderRadius: "12px",
          backgroundColor: "#000",
        }}
      >
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

// 💼 Main Work Component
const Works = () => {
  return (
    <div id="">
      <div>
        <p className={`${styles.sectionSubText}`}></p>
        <h2 className={`${styles.sectionHeadText}`}></h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"></p>
      </div>

      {/* === YouTube Videos Section === */}
      <div className="mt-16">
        <h2 className={`${styles.sectionHeadText} mb-6`}>YouTube Videos</h2>
        <div className="flex flex-wrap gap-6">
          {longFormVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>

      {/* === Reels and Shorts Section === */}
      <div className="mt-16">
        <h2 className={`${styles.sectionHeadText} mb-6`}>Reels and Shorts</h2>
        <div className="flex flex-wrap gap-6">
          {shortFormVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
