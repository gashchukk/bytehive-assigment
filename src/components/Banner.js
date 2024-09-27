import React from 'react'
import './Banner.css'
export default function Banner() {
    return (
        <div className="banner">
            <div className="back-banner">
                <h1>Manage expenses<br/> directly from Chrome</h1>
                <a href="/get-in-touch"><button className="button-banner" >
                    Get in touch
                </button>
                </a>
                <svg className="window" width="1160" height="427" viewBox="0 0 1160 427" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_287)">
                        <path
                            d="M69 35.2744H1091V657.817C1091 670.98 1080.33 681.651 1067.17 681.651H92.834C79.6708 681.651 69 670.98 69 657.817V35.2744Z"
                            fill="white"/>
                    </g>
                    <path
                        d="M69 19.0672C69 8.53665 77.5367 0 88.0672 0H1071.93C1082.46 0 1091 8.53666 1091 19.0672V50.219H69V19.0672Z"
                        fill="#22282B"/>
                    <circle cx="95.2598" cy="24.669" r="5.28621" fill="#FC5652"/>
                    <circle cx="115.281" cy="24.669" r="5.28621" fill="#FDBC40"/>
                    <circle cx="135.301" cy="24.669" r="5.28621" fill="#34C84A"/>
                    <defs>
                        <filter id="filter0_d_0_287" x="-45.403" y="35.2744" width="1250.81" height="951.452"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feMorphology radius="28.6007" operator="erode" in="SourceAlpha"
                                          result="effect1_dropShadow_0_287"/>
                            <feOffset dy="190.672"/>
                            <feGaussianBlur stdDeviation="71.5019"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.0392157 0 0 0 0 0.0156863 0 0 0 0 0.235294 0 0 0 0.08 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_287"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_287" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>

        </div>
    )
}