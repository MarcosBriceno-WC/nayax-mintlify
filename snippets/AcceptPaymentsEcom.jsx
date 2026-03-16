export const IntegratePOS = () => {

  const FuelPumpIcon = () => (
    <svg width="46" height="48" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M34.5 13.5V33.5C34.5 35.1569 33.1569 36.5 31.5 36.5H12.5C10.8431 36.5 9.5 35.1569 9.5 33.5V10.5C9.5 8.84315 10.8431 7.5 12.5 7.5H27.5M34.5 13.5L38.5 17.5V26.5C38.5 28.7091 40.2909 30.5 42.5 30.5M34.5 13.5H31.5C29.2909 13.5 27.5 11.7091 27.5 9.5V7.5M27.5 7.5V16.5H9.5M20.5 22.5H16.5M31.5 40.5H12.5" 
        stroke="#FFCD00" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const AttendedDeviceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="48" viewBox="0 0 46 48" fill="none">
      <path
        d="M16.9056 5.80518H12.853C11.6525 5.80518 10.6777 6.77998 10.6777 7.98043V45.6186C10.6777 47.0899 11.8692 48.2813 13.3404 48.2813H32.8545C34.3257 48.2813 35.5171 47.0899 35.5171 45.6186V7.98043C35.5171 6.77998 34.5423 5.80518 33.3419 5.80518"
        stroke="#FFCD00"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M15.5 10.3364H30.6941" stroke="#FFCD00" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32.647 13.7932H13.5391V44.0572H32.647V13.7932Z" stroke="#FFCD00" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );

  const EmbeddedDeviceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="54" viewBox="0 0 48 54" fill="none">
      <path
        d="M42 11H6C5.17157 11 4.5 11.6716 4.5 12.5V36.5C4.5 37.3284 5.17157 38 6 38H42C42.8284 38 43.5 37.3284 43.5 36.5V12.5C43.5 11.6716 42.8284 11 42 11Z"
        stroke="#FFCD00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31.5 32H37.5" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.5 32H25.5" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 18.5H43.5" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const RemoteDeviceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="54" viewBox="0 0 48 54" fill="none">
      <path
        d="M39 27.5H9C8.17157 27.5 7.5 28.1716 7.5 29V38C7.5 38.8284 8.17157 39.5 9 39.5H39C39.8284 39.5 40.5 38.8284 40.5 38V29C40.5 28.1716 39.8284 27.5 39 27.5Z"
        stroke="#FFCD00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 9.5H9C8.17157 9.5 7.5 10.1716 7.5 11V20C7.5 20.8284 8.17157 21.5 9 21.5H39C39.8284 21.5 40.5 20.8284 40.5 20V11C40.5 10.1716 39.8284 9.5 39 9.5Z"
        stroke="#FFCD00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33.75" cy="15.5" r="2.5" fill="#FFCD00" />
      <circle cx="33.75" cy="33.5" r="2.5" fill="#FFCD00" />
    </svg>
  );

  const EVChargerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="54" viewBox="0 0 48 54" fill="none">
      <path d="M21 32L24 24.5H18L21 17" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 41V11C10.5 10.2044 10.8161 9.44129 11.3787 8.87868C11.9413 8.31607 12.7044 8 13.5 8H28.5C29.2956 8 30.0587 8.31607 30.6213 8.87868C31.1839 9.44129 31.5 10.2044 31.5 11V41" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 41H36" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.5 21.5H36C36.7956 21.5 37.5587 21.8161 38.1213 22.3787C38.6839 22.9413 39 23.7044 39 24.5V32C39 32.7956 39.3161 33.5587 39.8787 34.1213C40.4413 34.6839 41.2044 35 42 35C42.7956 35 43.5587 34.6839 44.1213 34.1213C44.6839 33.5587 45 32.7956 45 32V16.7431C45.0001 16.3489 44.9224 15.9586 44.7715 15.5944L40.5 11" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const cards = [
    {
      icon: <RemoteDeviceIcon />,
      title: "Unattended Devices",
      arrow: "Marshall",
      description: "Connect any unattended machine with Nayax's payment devices (VPOS Touch, Onyx), utilizing physical connectivity.",
      link: "/docs/integrate-pos-device/marshall/get-started/marshall-integration-process",
      comingSoon: false,
    },
    {
      icon: <FuelPumpIcon />,
      title: "Fuel & Forecourt Solutions",
      arrow: "Marshall Pro (Fuel)",
      description: "A specialized integration for fuel dispensers and forecourt controllers, featuring a certified step-by-step certification process.",
      link: "/docs/integrate-pos-device/marshall-pro/getting-started/index",
      comingSoon: false,
    },
    {
      icon: <AttendedDeviceIcon />,
      title: "Attended Retail Devices",
      arrow: "TweezerComm",
      description: "Integrate Nayax's attended payment device (Nova line) with your Point of Sale, utilizing physical connectivity.",
      link: "/docs/integrate-pos-device/tweezercomm/overview-tweezer",
      comingSoon: false,
    },
    {
      icon: <EmbeddedDeviceIcon />,
      title: "Embedded Devices",
      arrow: "EMV Core",
      description: "Connect any unattended machine with embedded Nayax payment devices (Uno line).",
      link: "/docs/integrate-pos-device/emv-core/get-started/emv-core-integration-process",
      comingSoon: false,
    },
    {
      icon: <RemoteDeviceIcon />,
      title: "Remote Device Integration",
      arrow: "Spark",
      description: "Remotely integrate your platform with Nayax devices (server-to-server integration). Ideal for POS and platform integrations.",
      link: "/docs/integrate-pos-device/spark/spark-integration-process",
      comingSoon: false,
    },
    {
      icon: <EVChargerIcon />,
      title: "EV Charger Integration",
      arrow: "OCPI",
      description: "Easily integrate your EV platform to Nayax payment devices based on the Open Charge Point Interface protocol (OCPI).",
      link: "#ocpi",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#1B1B1B]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Integrate POS Devices</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl">Integrate Nayax POS with your machines, kiosks, EV chargers, or any application.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cards.map((card, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-[#262626] hover:shadow-lg transition-shadow">
              <div className="relative w-14 h-14 flex items-center justify-center mb-4">
                <div className="absolute inset-0 bg-yellow-400/20 dark:bg-yellow-400/10 rounded-full"></div>
                <div className="relative z-10">{card.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{card.title} → {card.arrow}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 min-h-[80px] block">{card.description}</p>
              {card.comingSoon ? (
                <span className="inline-block bg-yellow-400 dark:bg-yellow-500 text-gray-900 dark:text-gray-900 font-bold text-sm px-4 py-2 rounded-md">Coming Soon</span>
              ) : (
                <a href={card.link} className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                  Learn More <span className="text-sm">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};