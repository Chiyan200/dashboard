"use client" 
import React, { useEffect, useState ,useRef} from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../component/ui/card';

// Sample Api Data
const DummyData = [
  {
      "value": "5259",
      "valueDate": "01/09/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "12073",
      "valueDate": "02/09/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "25888",
      "valueDate": "03/09/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "22655",
      "valueDate": "04/09/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "3883",
      "valueDate": "05/09/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "28365",
      "valueDate": "06/09/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "9854",
      "valueDate": "07/09/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "11227",
      "valueDate": "08/09/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "12044",
      "valueDate": "09/09/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "19249",
      "valueDate": "10/09/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "21040",
      "valueDate": "11/09/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "13193",
      "valueDate": "12/09/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "18575",
      "valueDate": "13/09/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "1938",
      "valueDate": "14/09/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "16109",
      "valueDate": "15/09/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "26609",
      "valueDate": "16/09/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "11029",
      "valueDate": "17/09/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "14405",
      "valueDate": "18/09/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "2192",
      "valueDate": "19/09/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "8046",
      "valueDate": "20/09/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "16606",
      "valueDate": "21/09/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "5100",
      "valueDate": "22/09/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "14627",
      "valueDate": "23/09/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "20587",
      "valueDate": "24/09/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "20036",
      "valueDate": "25/09/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "25850",
      "valueDate": "26/09/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "20663",
      "valueDate": "27/09/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "10234",
      "valueDate": "28/09/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "15665",
      "valueDate": "29/09/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "3856",
      "valueDate": "30/09/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "7610",
      "valueDate": "01/10/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "1569",
      "valueDate": "02/10/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "24220",
      "valueDate": "03/10/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "15505",
      "valueDate": "04/10/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "25917",
      "valueDate": "05/10/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "18566",
      "valueDate": "06/10/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "29483",
      "valueDate": "07/10/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "29794",
      "valueDate": "08/10/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "14274",
      "valueDate": "09/10/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "3069",
      "valueDate": "10/10/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "17856",
      "valueDate": "11/10/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "16353",
      "valueDate": "12/10/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "29934",
      "valueDate": "13/10/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "5018",
      "valueDate": "14/10/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "25538",
      "valueDate": "15/10/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "17384",
      "valueDate": "16/10/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "5934",
      "valueDate": "17/10/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "13876",
      "valueDate": "18/10/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "4398",
      "valueDate": "19/10/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "17757",
      "valueDate": "20/10/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "15853",
      "valueDate": "21/10/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "1119",
      "valueDate": "22/10/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "27233",
      "valueDate": "23/10/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "15054",
      "valueDate": "24/10/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "16128",
      "valueDate": "25/10/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "3966",
      "valueDate": "26/10/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "24551",
      "valueDate": "27/10/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "4363",
      "valueDate": "28/10/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "7981",
      "valueDate": "29/10/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "3619",
      "valueDate": "30/10/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "27100",
      "valueDate": "31/10/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "1019",
      "valueDate": "01/11/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "13522",
      "valueDate": "02/11/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "9338",
      "valueDate": "03/11/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "25923",
      "valueDate": "04/11/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "23035",
      "valueDate": "05/11/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "15269",
      "valueDate": "06/11/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "13795",
      "valueDate": "07/11/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "14565",
      "valueDate": "08/11/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "13901",
      "valueDate": "09/11/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "10539",
      "valueDate": "10/11/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "16310",
      "valueDate": "11/11/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "12449",
      "valueDate": "12/11/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "25434",
      "valueDate": "13/11/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "29565",
      "valueDate": "14/11/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "26635",
      "valueDate": "15/11/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "18467",
      "valueDate": "16/11/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "16931",
      "valueDate": "17/11/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "6224",
      "valueDate": "18/11/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "19745",
      "valueDate": "19/11/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "10595",
      "valueDate": "20/11/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "3689",
      "valueDate": "21/11/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "29500",
      "valueDate": "22/11/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "16395",
      "valueDate": "23/11/2025",
      "valueDayOfWeek": "Sunday"
  },
  {
      "value": "24543",
      "valueDate": "24/11/2025",
      "valueDayOfWeek": "Monday"
  },
  {
      "value": "3989",
      "valueDate": "25/11/2025",
      "valueDayOfWeek": "Tuesday"
  },
  {
      "value": "10466",
      "valueDate": "26/11/2025",
      "valueDayOfWeek": "Wednesday"
  },
  {
      "value": "25128",
      "valueDate": "27/11/2025",
      "valueDayOfWeek": "Thursday"
  },
  {
      "value": "23898",
      "valueDate": "28/11/2025",
      "valueDayOfWeek": "Friday"
  },
  {
      "value": "24094",
      "valueDate": "29/11/2025",
      "valueDayOfWeek": "Saturday"
  },
  {
      "value": "2128",
      "valueDate": "30/11/2025",
      "valueDayOfWeek": "Sunday"
  }
]

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return <>{children}</>
}

const ProgressBar =({data }: any) =>{
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [wavePosition, setWavePosition] = useState(-1);  

  const getSegmentColor = (value: string) => {
    const numValue = parseInt(value);
    if (numValue > 20000) return 'bg-green-400';
    if (numValue > 15000) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  const getSegmentHoverColor = (value: string) => {
    const numValue = parseInt(value);
    if (numValue > 20000) return 'group-hover:bg-green-300';
    if (numValue > 15000) return 'group-hover:bg-yellow-300';
    return 'group-hover:bg-red-300';
  };

  useEffect(() => {
    if (data.length === 0) return;

    setWavePosition(-1);
    
    const animationDuration = 2000;
    const interval = animationDuration / data.length;
    
    let position = -1;
    const timer = setInterval(() => {
      if (position < data.length) {
        setWavePosition(position);
        position++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [data]);

  return (
    <div className="relative">
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-3 shadow-inner">
      <div className="flex w-full relative h-12">
        {data.map((item : any, index :number) => {
          const segmentColor = getSegmentColor(item.value);
          const hoverColor   = getSegmentHoverColor(item.value);
          const isWaveActive = index <= wavePosition;
          return (
            <div
              key={index}
              className="relative group flex-1"
              onMouseEnter={() => setHoveredSegment(index)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              <div className="flex h-full gap-[2px] px-[1px]">
                
                  <div
                  
                    className={`flex-1 transform transition-all duration-500 ease-out
                      ${segmentColor}
                      ${hoverColor}
                      ${isWaveActive ? 'scale-y-100' : 'scale-y-25 bg-gray-500  opacity-10'}
                      group-hover:scale-y-125 origin-center rounded-sm`}
                    style={{
                   
                    }}
                  />
                
              </div>

              {hoveredSegment === index && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-100">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl p-4 min-w-[160px]
                    animate-in fade-in zoom-in-95 duration-300 ease-out">
                    <div className="text-sm font-medium text-slate-300">{item.valueDate}</div>
                    <div className="text-xl font-bold text-white mt-1">
                      {parseInt(item.value).toLocaleString()}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45
                      bg-white/10 border-r border-b border-white/20" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

const TimelineDashboard = ({data}:any) => { 
  return (
    <ClientOnly>
      <Card className="w-full   bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 text-white p-6 shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            IMG SL DASHBOARD
          </CardTitle>
          <div className="text-sm text-slate-400">Live status</div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">Ecomm API</div>
              <div className="text-sm text-slate-400">99.98% uptime for the last 90 days</div>
            </div>
            
            <ProgressBar data={data}/>

            <div className="mt-8">
              <div className="text-lg font-medium mb-4">System status</div>
              <div className="space-y-2">
                {['Owner Service', 'Buy Service'].map((service) => (
                  <div key={service} 
                    className="flex items-center space-x-2 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 
                      backdrop-blur-sm transition-colors hover:bg-slate-800/70">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-slate-200">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              {[
                { color: 'bg-green-400', text: 'Operational' },
                { color: 'bg-yellow-400', text: 'Partial degradation' },
                { color: 'bg-red-400', text: 'Severe degradation' }
              ].map((status) => (
                <div key={status.text} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${status.color}`} />
                  <span>{status.text}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </ClientOnly>
  );
};

 

const FAQ = ( {data , func ,paragraph,title}:any) => {
  const [selected, setSelected] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null); 
  const toggle = (index: number) => {
    selected != index && func()  
    setSelected((prev) => (prev === index ? null : index)); 
  };
 
  return (
    <ClientOnly>
      <div className="bg-slate-900/95 max-w-full mx-auto shadow-lg rounded-md w-full md:w-1/2 mb-10 mt-10">
        <div className="shadow-box">
          {/* Accordion Item */}
          <div className="relative">
            {/* Using div instead of button for proper nesting */}
            <div
              role="button"
              tabIndex={0}
              className="w-full px-6 py-6 text-left cursor-pointer"
              onClick={() => toggle(1)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggle(1);
                }
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-white-800 font-bold">
                     {title}
                  </span>
                  <div className="border-solid border-2 border-white-500 rounded-full p-0.8">
                    <svg
                      className={`w-5 h-5 text-white-500 font-extrabold transition-transform duration-300 ${
                        selected === 1 ? "rotate-90" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"  
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >  
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="underline text-white-900 hover:text-green-900 font-bold">
                    Operational
                  </span>
                </div>
              </div>
            </div>
            {/* Content section */}
            <div
              ref={contentRef}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                selected === 1 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                  {paragraph}
              </div>
              <h2  className="px-6 pb-6 text-xl">Status</h2>
              <div className="px-6 pb-6">
                {data?.length > 0 && <ProgressBar data={data} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};
 

export default function Home() {
  const [EcommData,setEcommData] = useState<any>([]);  // Api 1 store Data
  const [Service1Data,setService1Data] = useState<any>([]);  // Api 2 store Data
  const [Service2Data,setService2Data] = useState<any>([]);   // Api 3 store Data

  const BaseUrl ="https://jsonplaceholder.typicode.com" // Replace with your actual API endpoint

  const fromDate = '2025-09-01';
  const toDate = '2025-11-30';

  // Api 1
  function Ecomm(fromDate :any, toDate :any) {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    
    if (typeof window === 'undefined') {
      return [];
    }

    fetch(`${BaseUrl}/posts`) // Replace with your actual API endpoint
    .then(response => response.json())  // Parse the JSON response
    .then((data) => {
      if(data.value && data.valueDate && data.valueDayOfWeek){ 
        setEcommData(data);   
      }else{
        setEcommData(DummyData); 
      }
    })
    .catch(error => console.log('Error fetching data:', error)); 
  } 

   // Api 2
  function Service1(fromDate :any, toDate :any) { 
    const from = new Date(fromDate);
    const to = new Date(toDate);
    
    if (typeof window === 'undefined') {
      return [];
    }

    fetch(`${BaseUrl}/posts`) // Replace with your actual API endpoint
    .then(response => response.json())  // Parse the JSON response
    .then((data) => {
      if(data.value && data.valueDate && data.valueDayOfWeek){ 
        setService1Data(data);   
      }else{
        setService1Data(DummyData); 
      }
    })
    .catch(error => console.log('Error fetching data:', error)); 
  } 

   // Api 3
  function Service2(fromDate :any, toDate :any) { 
    const from = new Date(fromDate);
    const to = new Date(toDate);
    
    if (typeof window === 'undefined') {
      return [];
    }

    fetch(`${BaseUrl}/posts`) // Replace with your actual API endpoint
    .then(response => response.json())  // Parse the JSON response
    .then((data) => {
      if(data.value && data.valueDate && data.valueDayOfWeek){ 
        setService2Data(data);   
      }else{
        setService2Data(DummyData); 
      }
    })
    .catch(error => console.log('Error fetching data:', error)); 
  } 

  useEffect(()=>{ 
    Ecomm(fromDate, toDate);  
  },[])

  return ( 
    <>
      <div className="m-auto w-[60%] mt-10"> 
        {/* Api 1 Ecomm Data Passing */}
        {EcommData && <TimelineDashboard data={EcommData}/> } 
      </div>
      
      {/* Api 2 Service1 Data Passing */}
      <FAQ 
         data={Service1Data} 
         func={()=>{Service1(fromDate,toDate)}} // When the accordion header is clicked, this function will work.
         paragraph="The sun was setting behind the mountains, casting a warm orange glow across the sky. Birds chirped as they returned to their nests, 
                    and a gentle breeze rustled the leaves of the trees. The peaceful scene was a perfect reminder of the beauty of nature and the calm
                    that can be found in moments of solitude. As the stars began to appear, the world seemed to slow down, 
                    allowing for a brief escape from the busyness of life. It was a moment to pause, reflect, and appreciate the small wonders of the world around us."
         title="Service 1"    
      />
      
      {/* Api 3 Service2 Data Passing  */}
      <FAQ 
         data={Service2Data} 
         func={()=>{Service2(fromDate,toDate)}} // When the accordion header is clicked, this function will work.
         paragraph="The sun was setting behind the mountains, casting a warm orange glow across the sky. Birds chirped as they returned to their nests, 
         and a gentle breeze rustled the leaves of the trees. The peaceful scene was a perfect reminder of the beauty of nature and the calm
         that can be found in moments of solitude. As the stars began to appear, the world seemed to slow down, 
         allowing for a brief escape from the busyness of life. It was a moment to pause, reflect, and appreciate the small wonders of the world around us."
         title="Service 2" 
      />
    </>
  );
}
