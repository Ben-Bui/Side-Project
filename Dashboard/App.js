import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Set interval to refresh iframe every 5 seconds
    const interval = setInterval(() => {
      const iframe = document.getElementById("looker-studio-iframe");
      iframe.src = iframe.src; // Reload the iframe
    }, 5000); // 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Looker Dashboard</h1>
      <iframe
        id="looker-studio-iframe"
        width="600"
        height="338"
        src="https://lookerstudio.google.com/embed/reporting/96084f0b-b4ea-467e-8f7a-0b271cb0468d/page/7dpIE"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default App;
