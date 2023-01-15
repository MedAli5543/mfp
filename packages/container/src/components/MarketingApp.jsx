import React, { useRef, useEffect } from "react";
import { mount } from "@Marketing/MarketingApp";

export default function MarketingApp() {
  const appContainerRef = useRef(null);

  useEffect(() => {
    mount(appContainerRef.current);
  }, []);

  return <div ref={appContainerRef} />;
}
