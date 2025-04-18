import Script from 'next/script';

export default function Home() {
  return (
    <div>

      {/* First Adsera Script */}
      <Script
        src="//pl26268277.effectiveratecpm.com/d4/ec/90/d4ec9055f3069a4bfae28f01ffcfa7ca.js"
        strategy="lazyOnload"
      />

      {/* Second Adsera Script */}
      <Script
        src="//pl26268169.effectiveratecpm.com/f3ae654a2213ba937cbbbfd402e635b9/invoke.js"
        strategy="afterInteractive"
        async
        data-cfasync="false"
      />
     

      {/* Container for the second script */}
      <div id="container-f3ae654a2213ba937cbbbfd402e635b9"></div>
    </div>
  );
}