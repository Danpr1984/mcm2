import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import { AuthContext } from "../context/AuthContext";
import { isResponseOk } from "../helpers/fetch-requests";
import { AudioContext } from "../context/AudioContext";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const ColorWheel = () => {
  const { assignTrack } = useContext(ColorContext);
  const { getCSRF } = useContext(AuthContext);
  const { setUserSongs } = useContext(AudioContext);

  const handleColorAssign = async (color) => {
    if (!assignTrack) return;
    const colorData = {
      color: color,
      track: assignTrack,
    };

    console.log(assignTrack);

    const csrf = await getCSRF();

    const body = JSON.stringify(colorData);

    fetch(`${BASE_URL}/api/assign_color_to_song/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrf,
      },
      credentials: "include",
      body,
    }).then(isResponseOk);

    fetchUserSongs();
  };

  const fetchUserSongs = async () => {
    const csrf = await getCSRF();

    try {
      const response = await fetch(`${BASE_URL}api/user_songs/`, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrf,
        },
        credentials: "include",
      });

      const { user_songs } = await response.json();
      setUserSongs(user_songs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <svg viewBox="0 0 64 64" className="pie">
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "orange",
          strokeDashoffset: -1,
        }}
        onClick={() => handleColorAssign("orange")}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "skyblue",
          strokeDashoffset: 12.5,
        }}
        onClick={() => handleColorAssign("skyblue")}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "gray",
          strokeDashoffset: 25,
        }}
        onClick={() => handleColorAssign("gray")}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-black hover:stroke-black/50 focus:stroke-black/50"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 37.5,
        }}
        onClick={() => handleColorAssign("black")}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-yellow-300 hover:stroke-yellow-200 hover:brightness-125 focus:stroke-yellow-200 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 50,
        }}
        onClick={() => handleColorAssign("yellow")}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-blue-700 hover:stroke-blue-600 hover:brightness-125 focus:stroke-blue-600 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 62.5,
        }}
        onClick={() => handleColorAssign("blue")}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-red-600 hover:stroke-red-500 hover:brightness-125 focus:stroke-red-500 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 75,
        }}
        onClick={() => handleColorAssign("red")}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "green",
          strokeDashoffset: 87.5,
        }}
        onClick={() => handleColorAssign("green")}
      ></circle>
    </svg>
  );
};

export default ColorWheel;
