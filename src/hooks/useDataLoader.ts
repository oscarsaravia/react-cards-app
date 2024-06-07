// useUserDataLoader.ts
import { useEffect, useState } from "react";
import { ApiResponse } from "../interfaces";

export const useUserDataLoader = (baseUrl: string, initialUserId: number) => {
  // TODO: CREATE LOGIC FOR SAVING FETCHED DATA INTO CACHE OR LOCAL STORAGE
  const [currentUserId, setCurrentUserId] = useState(initialUserId);
  const [apiData, setApiData] = useState<ApiResponse>({} as ApiResponse);
  const [loading, setLoading] = useState(true);

  const MIN_USER_ID = 1;
  const MAX_USER_ID = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get data from url
        const response = await fetch(`${baseUrl}/${currentUserId}`);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, currentUserId]);

  const handlePrevious = () => {
    setCurrentUserId((prev) => Math.max(prev - 1, MIN_USER_ID));
  };

  const handleNext = () => {
    setCurrentUserId((prev) => Math.min(prev + 1, MAX_USER_ID));
  };

  return { currentUserId, apiData, loading, handlePrevious, handleNext };
};
