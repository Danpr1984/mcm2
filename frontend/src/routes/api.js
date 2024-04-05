import { baseURLClient } from "../App";

export const fetchUserSongs = async (configToken) => {
  try {
    const response = await baseURLClient.get("/api/user_songs", configToken);
    if (response.status === 200) {
      const { data } = response;
      if (data.user_songs) return data.user_songs;
      else throw new Error("No user songs found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const removeSong = async (song, configToken) => {
  try {
    const response = await baseURLClient.post(
      "/api/remove_color_song/",
      song,
      configToken,
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

export const reassignColor = async (colorData, configToken) => {
  try {
    const response = await baseURLClient.post(
      "/api/reassign_color/",
      colorData,
      configToken,
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

export const colorAssign = async (colorData, configToken) => {
  try {
    const response = await baseURLClient.post(
      "/api/assign_color_to_song/",
      colorData,
      configToken,
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
