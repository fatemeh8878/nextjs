export const PlayIcon = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60}>
            <defs>
                <linearGradient
                    id="a"
                    x1={0.5}
                    x2={0.5}
                    y2={1}
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#f1f3f6" />
                    <stop offset={1} stopColor="#e6e9f0" />
                </linearGradient>
            </defs>
            <g data-name="play-button-arrowhead (1)" transform="translate(24 23.025)">
                <circle
                    cx={17.5}
                    cy={17.5}
                    r={17.5}
                    fill="url(#a)"
                    data-name="Ellipse 10"
                    transform="translate(-12 -11.025)"
                />
                <path
                    fill="#767f91"
                    d="M2.215.3C.993-.4 0 .172 0 1.582v10.4c0 1.411.992 1.985 2.215 1.284l9.092-5.214a1.338 1.338 0 0 0 0-2.541Z"
                    data-name="Path 213"
                />
                <circle
                    cx={30}
                    cy={30}
                    r={30}
                    fill="url(#a)"
                    data-name="Ellipse 11"
                    opacity={0.25}
                    transform="translate(-24 -23.025)"
                />
            </g>
        </svg>
    )
}
