import React from 'react';

// Navigation & General UI
export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const QuestionMarkCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
);

// Chatbot
export const ChatBubbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.28c-.427.032-.851-.074-1.227-.26l-3.068-.982c-.374-.119-.78-.119-1.154 0l-3.068.982c-.376.186-.8.292-1.227.26l-3.722-.28A2.25 2.25 0 012.25 15v-4.286c0-.97.616-1.813 1.5-2.097v6.086A2.25 2.25 0 006 18.25h12A2.25 2.25 0 0020.25 16v-7.489zM6.75 8.25h.75v.75h-.75V8.25zm3 0h.75v.75h-.75V8.25zm3 0h.75v.75h-.75V8.25z" />
    </svg>
);

export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);

export const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);


export const AiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2a10 10 0 1 0 5.5 18.15" />
        <path d="M12 8a4 4 0 1 0 2.5 7.15" />
        <path d="M8.5 10.5a1 1 0 1 0-1-1.73" />
        <path d="M17.5 10.5a1 1 0 1 0-1-1.73" />
        <path d="M14 18.5a1 1 0 1 0 .5 1.93" />
        <path d="M12 14.5a1 1 0 1 0 1.73.99" />
    </svg>
);


// Contact & Footer
export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const LocationMarkerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16.75,13.96C17.02,14.26 17.2,14.72 17.1,15.21C17,15.71 16.5,16.22 16.21,16.41C15.93,16.59 15.3,16.8 12,16.8C8.7,16.8 6.07,15.26 5.82,15.04C5.57,14.82 4.8,14.05 4.8,12.89C4.8,11.73 5.58,11.05 5.76,10.83C5.94,10.61 6.13,10.55 6.33,10.55C6.54,10.55 6.73,10.55 6.9,10.55C7.07,10.55 7.23,10.59 7.4,11.07C7.59,11.58 8.03,12.83 8.12,12.97C8.21,13.11 8.28,13.25 8.12,13.4C8,13.54 7.5,14.06 7.26,14.3C7.02,14.55 6.77,14.63 6.94,14.96C7.11,15.29 7.82,16.23 8.76,17.02C9.91,17.97 10.9,18.29 11.27,18.42C11.64,18.54 11.9,18.52 12.14,18.28C12.38,18.04 13.1,17.21 13.3,16.92C13.5,16.63 13.68,16.59 13.96,16.7C14.25,16.81 15.5,17.4 15.75,17.52C16,17.63 16.23,17.7 16.3,17.75C16.5,17.89 16.48,18.21 16.48,18.21L16.48,18.21V18.21Z" fillOpacity="0" />
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C13.66,22 15.24,21.5 16.6,20.62L22,22L20.62,16.6C21.5,15.24 22,13.66 22,12A10,10 0 0,0 12,2M16.75,13.96C17.02,14.26 17.2,14.72 17.1,15.21C17,15.71 16.5,16.22 16.21,16.41C15.93,16.59 15.3,16.8 12,16.8C8.7,16.8 6.07,15.26 5.82,15.04C5.57,14.82 4.8,14.05 4.8,12.89C4.8,11.73 5.58,11.05 5.76,10.83C5.94,10.61 6.13,10.55 6.33,10.55C6.54,10.55 6.73,10.55 6.9,10.55C7.07,10.55 7.23,10.59 7.4,11.07C7.59,11.58 8.03,12.83 8.12,12.97C8.21,13.11 8.28,13.25 8.12,13.4C8,13.54 7.5,14.06 7.26,14.3C7.02,14.55 6.77,14.63 6.94,14.96C7.11,15.29 7.82,16.23 8.76,17.02C9.91,17.97 10.9,18.29 11.27,18.42C11.64,18.54 11.9,18.52 12.14,18.28C12.38,18.04 13.1,17.21 13.3,16.92C13.5,16.63 13.68,16.59 13.96,16.7C14.25,16.81 15.5,17.4 15.75,17.52C16,17.63 16.23,17.7 16.3,17.75C16.5,17.89 16.48,17.83 16.48,17.83L16.75,13.96Z" />
    </svg>
);


export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.148.277 2.917.585.78.307 1.446.774 2.052 1.38s1.075 1.272 1.38 2.052c.308.77.527 1.648.585 2.917.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.277 2.148-.585 2.917-.307.78-.774 1.446-1.38 2.052s-1.272 1.075-2.052 1.38c-.77.308-1.648.527-2.917.585-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.148-.277-2.917-.585-.78-.307-1.446-.774-2.052-1.38s-1.075-1.272-1.38-2.052c-.308-.77-.527-1.648-.585-2.917-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.277 2.148.585 2.917.307-.78.774-1.446 1.38-2.052s1.272-1.075 2.052-1.38c.77-.308 1.648-.527 2.917-.585C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.193 0-3.559.012-4.784.068-1.18.053-1.895.246-2.45.452-.62.228-1.09.56-1.564 1.033-.474.474-.805.944-1.033 1.564-.206.555-.399 1.27-.452 2.45C2.623 8.441 2.611 8.807 2.611 12s.012 3.559.068 4.784c.053 1.18.246 1.895.452 2.45.228.62.56 1.09 1.033 1.564.474.474.944.805 1.564 1.033.555.206 1.27.399 2.45.452C8.441 21.377 8.807 21.389 12 21.389s3.559-.012 4.784-.068c1.18-.053 1.895-.246 2.45-.452.62-.228 1.09-.56 1.564-1.033.474-.474.805-.944 1.033-1.564.206-.555.399-1.27.452-2.45C21.377 15.559 21.389 15.193 21.389 12s-.012-3.559-.068-4.784c-.053-1.18-.246-1.895-.452-2.45-.228-.62-.56-1.09-1.033-1.564-.474-.474-.944-.805-1.564-1.033-.555-.206-1.27-.399-2.45-.452C15.559 2.623 15.193 2.611 12 2.611zm0 2.997A5.336 5.336 0 1012 17.33a5.336 5.336 0 000-8.736zm0 7.296A1.96 1.96 0 1112 8.64a1.96 1.96 0 010 3.92zM16.949 5.564a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
    </svg>
);

// Signs Section
export const SpeechBubbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.037 1.277-2.03 2.133-2.923a10.43 10.43 0 012.332-2.195c.523-.342.969-.641 1.353-.924a3.375 3.375 0 00-3.176-5.32c-.312.14-.6.312-.86.503a10.53 10.53 0 00-4.293 5.572c-.22.42-.415.854-.585 1.308a10.43 10.43 0 00-1.406 4.418c-.033.437-.058.88-.076 1.328a3 3 0 002.993 2.993c.448-.017.89-.042 1.328-.076.74-.058 1.458-.16 2.133-.292a10.428 10.428 0 002.332-2.195z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
  </svg>
);

export const CogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);


// Services Section
export const PuzzleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.596.484-1.08 1.08-1.08h.36c.596 0 1.08.484 1.08 1.08v.36c0 .596-.484 1.08-1.08 1.08h-.36c-.596 0-1.08-.484-1.08-1.08v-.36zM4.5 14.25c0-.596.484-1.08 1.08-1.08h.36c.596 0 1.08.484 1.08 1.08v.36c0 .596-.484 1.08-1.08 1.08h-.36c-.596 0-1.08-.484-1.08-1.08v-.36zM9.75 15.75c0-.596.484-1.08 1.08-1.08h.36c.596 0 1.08.484 1.08 1.08v.36c0 .596-.484 1.08-1.08 1.08h-.36c-.596 0-1.08-.484-1.08-1.08v-.36zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const MicIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 016 0v8.25a3 3 0 01-3 3z" /></svg>;
export const HandIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M6.633 10.5l-1.88-1.88a.75.75 0 00-1.06 1.061l1.88 1.88M6.633 10.5c.045.045.09.088.135.129m-1.215 8.25a.75.75 0 00-1.06 1.061l1.88 1.88a.75.75 0 001.06-1.061l-1.88-1.88a.75.75 0 00-1.06 1.061l1.88 1.88" /></svg>;
export const BookIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;


// Logo
export const Logo = () => (
    <div className="flex flex-col items-start group">
        <span
            className="text-5xl font-bold text-primary-dark group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.08em' }}
        >
            ABA
        </span>
        <div className="flex flex-col items-start -mt-2 ml-1">
            <span className="text-[11px] font-semibold text-primary group-hover:text-primary-light transition-colors duration-300 tracking-tight">
                INSTITUTO SÃO JOAQUIM
            </span>
            <span className="text-[7px] font-medium text-primary-light group-hover:text-primary-light/80 transition-colors duration-300 tracking-normal mt-0.5">
                ANÁLISE DO COMPORTAMENTO APLICADA
            </span>
        </div>
    </div>
);

export const LogoLight = () => (
     <div className="flex flex-col items-start group">
        <span
            className="text-5xl font-bold text-light group-hover:text-gray-300 transition-colors duration-300"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.08em' }}
        >
            ABA
        </span>
        <div className="flex flex-col items-start -mt-2 ml-1">
            <span className="text-[11px] font-semibold text-gray-200 group-hover:text-gray-400 transition-colors duration-300 tracking-tight">
                INSTITUTO SÃO JOAQUIM
            </span>
            <span className="text-[7px] font-medium text-gray-400 group-hover:text-gray-500 transition-colors duration-300 tracking-normal mt-0.5">
                ANÁLISE DO COMPORTAMENTO APLICADA
            </span>
        </div>
    </div>
);

// Testimonials
export const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M14.017 21v-7.391c0-2.908.942-5.05 2.825-6.425.942-.684 1.412-1.325 1.412-1.925 0-.55-.47-1.1-1.412-1.65-.942-.55-2.117-.825-3.525-.825v2.85c1.412 0 2.354.442 2.825 1.325.47.883.705 2.142.705 3.775V21h-3.85zm-9.525 0v-7.391c0-2.908.942-5.05 2.825-6.425C8.26 6.5 8.73 5.86 8.73 5.26c0-.55-.47-1.1-1.412-1.65-.942-.55-2.117-.825-3.525-.825v2.85c1.412 0 2.354.442 2.825 1.325.47.883.705 2.142.705 3.775V21H4.492z" />
    </svg>
);
