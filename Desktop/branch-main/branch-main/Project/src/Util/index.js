import cardImage from "@images/myPhoto.png";
import instagramIcon from "@images/instagram.png";
import facebookIcon from "@images/facebook.png";
import tiktokIcon from "@images/tiktok.png";
import linkedinIcon from "@images/linkedin.png";
import twitterIcon from "@images/twitter.png";

export const competitors = [
  {
    avatar: cardImage,
    name: "Bobby Smith",
    followers: 41,
    likesPerDay: 220,
    commentsPerDay: 200,
    sharesPerDay: 31,
    postsPerWeek: 2,
    reactions: [
      { id: 1, emoji: "👍", color: "#1877F2" },
      { id: 2, emoji: "❤️", color: "#E41E3F" },
      { id: 3, emoji: "😄", color: "#F7B928" },
    ],
  },
  {
    avatar: cardImage,
    name: "Omar Francis",
    followers: 241,
    likesPerDay: 2000,
    commentsPerDay: 800,
    sharesPerDay: 71,
    postsPerWeek: 4,
    reactions: [
      { id: 1, emoji: "👍", color: "#1877F2" },
      { id: 2, emoji: "❤️", color: "#E41E3F" },
      { id: 3, emoji: "😄", color: "#F7B928" },
    ],
  },
  {
    avatar: cardImage,
    name: "Jordan Brae",
    followers: 316,
    likesPerDay: 2312,
    commentsPerDay: 100,
    sharesPerDay: 21,
    postsPerWeek: 1,
    reactions: [
      { id: 1, emoji: "👍", color: "#1877F2" },
      { id: 2, emoji: "❤️", color: "#E41E3F" },
      { id: 3, emoji: "😄", color: "#F7B928" },
    ],
  },
];

export const links = [
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Analytics", path: "/analytics" },
  { name: "Posts", path: "/posts" },
  { name: "Competitor", path: "/competitor" },
  {
    name: "Settings",
    path: "/settings",
    drop: ["profile", "notifications"],
  },
];

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
};

export const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
};

export const platformIcons = [
  { name: "instagram", icon: instagramIcon },
  { name: "facebook", icon: facebookIcon },
  { name: "twitter", icon: twitterIcon },
  { name: "linkedin", icon: linkedinIcon },
  { name: "tiktok", icon: tiktokIcon },
];
