import { baseURLClient } from "../App";

export const fetchUserSongs = async () => {
  try {
    const response = await baseURLClient.get("/api/user_songs");
    if (response.status === 200) {
      const { data } = response;
      if (data.user_songs) return data.user_songs;
      else throw new Error("No user songs found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const removeSong = async (song) => {
  try {
    const response = await baseURLClient.post("/api/remove_color_song", song);

    if (response.status !== 200) {
      throw new Error("Failed to remove song");
    } else {
      //   throw new Error("Failed to remove song");
      // Success Toast Notification
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const reassignColor = async (colorData) => {
  try {
    const response = await baseURLClient.post("/api/reassign_color", colorData);

    if (response.status !== 200) {
      throw new Error("Failed to remove song");
    } else {
      //   throw new Error("Failed to remove song");
      // Success Toast Notification
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const colorAssign = async (colorData) => {
  try {
    const response = await baseURLClient.post(
      "/api/assign_color_to_song",
      colorData,
    );
    if (response.status !== 200) {
      throw new Error("Failed to remove song");
    } else {
      //   throw new Error("Failed to remove song");
      // Success Toast Notification
    }
  } catch (error) {
    throw new Error(error);
  }
};
