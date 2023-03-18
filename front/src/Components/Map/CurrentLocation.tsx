import { useState, useMemo } from "react";

export default function CurrentLocation() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | string>("");

  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 37.33370506366528,
        longitude: 127.09738924623072,
      });
      console.log("위치 받기 실패");
    }
  }, [navigator.geolocation.getCurrentPosition]);

  return location;
}
