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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
    </svg>
);


// Theme Toggle
export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.95-4.243l-1.59-1.59M3 12H.75m4.243-4.95l1.59-1.59M12 9a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
);

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75 2.138 0 4.127-.693 5.752-1.848z" />
    </svg>
);


// Chatbot
export const ChatBubbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.352 0 9.75-3.694 9.75-8.25s-4.398-8.25-9.75-8.25S2.25 7.306 2.25 11.856c0 2.36.797 4.545 2.126 6.244a.75.75 0 01.298.653v1.89z" clipRule="evenodd" />
    </svg>
);

export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);

export const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
  </svg>
);

export const AiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.75 2.25a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V2.25zM5.106 5.106a.75.75 0 00-1.06 1.06l1.06-1.06zM18.894 5.106a.75.75 0 001.06 1.06l-1.06-1.06zM21.75 12a.75.75 0 000-1.5h-2.25a.75.75 0 000 1.5h2.25zM17.834 16.096a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM2.25 12a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H2.25zM6.166 16.096a.75.75 0 101.06-1.06l-1.06 1.06a.75.75 0 00-1.06 1.06l1.06-1.06zM12 21.75a.75.75 0 000-1.5v-2.25a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0z" />
      <path fillRule="evenodd" d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM9.34 8.66a.75.75 0 10-1.06-1.06 3 3 0 00-3.18 4.24 3 3 0 004.24-3.18zM15.76 12.74a3 3 0 00-3.18-4.24.75.75 0 10-1.06 1.06 1.5 1.5 0 011.59 2.12.75.75 0 101.65-.94z" clipRule="evenodd" />
    </svg>
);


// Contact & Footer
export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.258 7.373c.077.152.25.19.431.087l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C6.55 22.5 1.5 17.45 1.5 10.5V4.5z" clipRule="evenodd" />
    </svg>
);

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

export const LocationMarkerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
);

export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.14c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.99s-.29.17-.54.06c-.25-.12-1.06-.39-2.02-1.25s-1.46-1.92-1.63-2.24c-.17-.32-.02-.5.1-.64.11-.12.25-.32.37-.47.12-.17.17-.29.25-.47.08-.17.04-.32-.02-.43l-.56-1.35c-.24-.58-.48-.5-.58-.51-.1-.01-.21-.01-.32-.01s-.29.04-.45.21c-.17.17-.65.64-.65 1.58 0 .94.67 1.83.76 1.95.08.12 1.3 2.08 3.16 2.94.43.2.76.32 1.03.4.45.13.86.11 1.18.07.36-.04.17-.16 1.47-.85.25-.12.42-.21.47-.32.05-.12.03-.25-.02-.36z" />
    </svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.148.277 2.917.585.78.307 1.446.774 2.052 1.38s1.075 1.272 1.38 2.052c.308.77.527 1.648.585 2.917.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.277 2.148-.585 2.917-.307.78-.774 1.446-1.38 2.052s-1.272 1.075-2.052 1.38c-.77.308-1.648.527-2.917.585-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.148-.277-2.917-.585-.78-.307-1.446-.774-2.052-1.38s-1.075-1.272-1.38-2.052c-.308-.77-.527-1.648-.585-2.917-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.277 2.148.585 2.917.307-.78.774-1.446 1.38-2.052s1.272-1.075 2.052-1.38c.77-.308 1.648-.527 2.917.585C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.193 0-3.559.012-4.784.068-1.18.053-1.895.246-2.45.452-.62.228-1.09.56-1.564 1.033-.474.474-.805.944-1.033 1.564-.206.555-.399 1.27-.452 2.45C2.623 8.441 2.611 8.807 2.611 12s.012 3.559.068 4.784c.053 1.18.246 1.895.452 2.45.228.62.56 1.09 1.033 1.564.474.474.944.805 1.564 1.033.555.206 1.27.399 2.45.452C8.441 21.377 8.807 21.389 12 21.389s3.559-.012 4.784-.068c1.18-.053 1.895-.246 2.45-.452.62-.228 1.09-.56 1.564-1.033.474-.474.805-.944 1.033-1.564.206-.555.399-1.27-.452-2.45C21.377 15.559 21.389 15.193 21.389 12s-.012-3.559-.068-4.784c-.053-1.18-.246-1.895-.452-2.45-.228-.62-.56-1.09-1.033-1.564-.474-.474-.944-.805-1.564-1.033-.555-.206-1.27-.399-2.45-.452C15.559 2.623 15.193 2.611 12 2.611zm0 2.997A5.336 5.336 0 1012 17.33a5.336 5.336 0 000-8.736zm0 7.296A1.96 1.96 0 1112 8.64a1.96 1.96 0 010 3.92zM16.949 5.564a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
    </svg>
);

export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
);


// Signs Section
export const SpeechBubbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
  </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM5.25 9.375c-1.503 0-2.846.82-3.573 2.099a.75.75 0 00.44 1.223h7.266a.75.75 0 00.44-1.223C9.096 10.195 7.753 9.375 6.375 9.375zM14.25 11.25c-1.503 0-2.846.82-3.573 2.099a.75.75 0 00.44 1.223h7.266a.75.75 0 00.44-1.223c-.727-1.279-2.07-2.099-3.573-2.099z" />
  </svg>
);

export const CogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 5.852a1.5 1.5 0 01-1.212.919l-2.605.372a1.875 1.875 0 00-1.954 2.453l1.058 2.486a1.5 1.5 0 01-.42 1.58l-1.68 1.68a1.875 1.875 0 000 2.652l1.68 1.68a1.5 1.5 0 01.42 1.58l-1.058 2.486a1.875 1.875 0 001.954 2.453l2.605.372a1.5 1.5 0 011.212.919l.178 2.034c.15.904.933 1.567 1.85 1.567h1.844c.917 0 1.699-.663 1.85-1.567l.178-2.034a1.5 1.5 0 011.212-.919l2.605-.372a1.875 1.875 0 001.954-2.453l-1.058-2.486a1.5 1.5 0 01.42-1.58l1.68-1.68a1.875 1.875 0 000-2.652l-1.68-1.68a1.5 1.5 0 01-.42-1.58l1.058-2.486a1.875 1.875 0 00-1.954-2.453l-2.605-.372a1.5 1.5 0 01-1.212-.919l-.178-2.034A1.875 1.875 0 0012.922 2.25h-1.844zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
  </svg>
);

export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.75.75l.04 1.54a2.25 2.25 0 004.42 0l.04-1.54a.75.75 0 011.5 0l-.04 1.54a3.75 3.75 0 01-7.42 0l-.04-1.54a.75.75 0 01.75-.75zM12 10.5a.75.75 0 01.75.75v3.19l.72-2.16a.75.75 0 011.36.45l-1.28 3.84a.75.75 0 01-1.42-.47l-.73-2.19v-3l-.73 2.19a.75.75 0 01-1.42.47l-1.28-3.84a.75.75 0 111.36-.45l.72 2.16v-3.19a.75.75 0 01.75-.75z" clipRule="evenodd" />
    <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z" />
  </svg>
);

export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export const HandRaisedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.625 2.25a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75z" />
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.536 8.95a.75.75 0 011.05-.163l.142.107a.75.75 0 01.163 1.05l-.107.142a4.502 4.502 0 00-2.334 3.999V15a.75.75 0 01-1.5 0v-1.5a6.002 6.002 0 013.107-5.242.75.75 0 01-.163-1.05l-.142-.107a.75.75 0 01-1.05.163l-.142-.107a4.5 4.5 0 00-2.497 1.342.75.75 0 01-1.214-.882A6 6 0 019.536 8.95z" clipRule="evenodd" />
  </svg>
);



// Services Section
export const PuzzleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
      <path fillRule="evenodd" d="M8.25 6a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V6.75A.75.75 0 018.25 6zM9 12.75a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9.75a.75.75 0 01-.75-.75zM15 8.25a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75A.75.75 0 0115 8.25z" clipRule="evenodd" />
    </svg>
);
export const MicIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.75 6.75 0 11-13.5 0v-1.5a.75.75 0 01.75-.75z" />
    </svg>
);

export const HandIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.25 3.75A1.5 1.5 0 0112.75 3h.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-2.25a.75.75 0 00-1.5 0v2.25a3 3 0 003 3h1.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-.5a3 3 0 00-3 3v.75a.75.75 0 001.5 0v-.75z" />
      <path d="M5.25 6.75A1.5 1.5 0 016.75 6h.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5V8.25a.75.75 0 00-1.5 0v6.75a3 3 0 003 3h1.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-.5a3 3 0 00-3 3v.75a.75.75 0 001.5 0v-.75z" />
      <path fillRule="evenodd" d="M17.25 3.75a1.5 1.5 0 011.5 1.5v12.75a1.5 1.5 0 01-1.5 1.5h-.5a1.5 1.5 0 01-1.5-1.5V18a.75.75 0 00-1.5 0v1.5a3 3 0 003 3h.5a3 3 0 003-3V5.25a3 3 0 00-3-3h-.5z" clipRule="evenodd" />
    </svg>
);
export const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6.44l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.72 1.72V6z" clipRule="evenodd" />
    </svg>
);

export const AcademicCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
        <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.914 9H3.087zM12 10.5a.75.75 0 01.75.75v3.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V11.25a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
);
export const UsersGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.5 19.5a3 3 0 013-3h9a3 3 0 013 3v.75a.75.75 0 01-1.5 0v-.75a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5v.75a.75.75 0 01-1.5 0v-.75z" />
      <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
);


// Logo
export const Logo = () => (
    <div className="flex flex-col items-start group">
        <span
            className="text-5xl font-bold text-primary-dark group-hover:text-primary transition-colors duration-300 dark:text-primary-light dark:group-hover:text-light"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.08em' }}
        >
            ABA
        </span>
        <div className="flex flex-col items-start -mt-2 ml-1">
            <span className="text-[11px] font-semibold text-primary group-hover:text-primary-light transition-colors duration-300 dark:text-primary dark:group-hover:text-primary-light tracking-tight">
                INSTITUTO SÃO JOAQUIM
            </span>
            <span className="text-[7px] font-medium text-primary-light group-hover:text-primary-light/80 transition-colors duration-300 dark:text-primary-light dark:group-hover:text-stone-300 tracking-normal mt-0.5">
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