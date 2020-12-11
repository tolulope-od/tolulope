import * as React from 'react';
import { string } from 'prop-types';

const LaptopSVG = (props) => (
  <svg
    width="596"
    height="543"
    viewBox="0 0 866 543"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g clipPath="url(#clip0)">
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M122.298 461.648C118.272 461.648 115.008 458.383 115.008 454.362V52.7181C115.01 39.5151 125.71 28.8101 138.91 28.8101H726.688C739.888 28.8101 750.588 39.5101 750.588 52.7181V454.362C750.588 458.386 747.318 461.648 743.298 461.648H122.298Z"
          fill="white"
        />
        <g filter="url(#filter1_f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M114.09 456.483H751.91V459.477H114.09V456.483Z"
            fill="#CBD2D4"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M433.203 50.43C432.083 50.43 431.173 49.523 431.173 48.408C431.173 47.292 432.083 46.385 433.203 46.385C434.323 46.385 435.233 47.292 435.233 48.408C435.233 49.523 434.323 50.431 433.203 50.431"
          fill="#BAC1C4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M432.797 45.1702C431.007 45.1702 429.549 46.6232 429.549 48.4082C429.549 50.1932 431.005 51.6442 432.796 51.6442C434.586 51.6442 436.044 50.1942 436.044 48.4082C436.044 46.6232 434.587 45.1712 432.796 45.1712L432.797 45.1702ZM432.796 47.0212C433.566 47.0212 434.188 47.6432 434.188 48.4092C434.188 49.1752 433.564 49.7962 432.795 49.7962C432.025 49.7962 431.403 49.1762 431.403 48.4092C431.403 47.6432 432.026 47.0222 432.795 47.0222"
          fill="#D0D8DB"
        />
        <path
          d="M725.553 63.781H140.853C140.406 63.781 140.043 64.1437 140.043 64.591V428.7C140.043 429.147 140.406 429.51 140.853 429.51H725.553C726 429.51 726.363 429.147 726.363 428.7V64.591C726.363 64.1437 726 63.781 725.553 63.781Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M823 462.74C823 462.74 814.967 472.45 648.222 472.102C593.252 471.988 514.497 471.985 433.609 472.034C351.766 471.984 272.839 471.987 217.777 472.102C51.033 472.45 43 462.74 43 462.74H823Z"
          fill="#E7E7E7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43 459.692C43 458.694 43.806 457.884 44.81 457.884H821.19C822.19 457.884 823 458.686 823 459.692V462.739H43V459.691V459.692Z"
          fill="white"
        />
      </g>
      <rect x="138" y="64" width="594.005" height="371" fill={`url(#${props.patternId})`} />
      <rect
        x="138.25"
        y="64.25"
        width="593.505"
        height="370.5"
        stroke="#706E6E"
        strokeOpacity="0.6"
        strokeWidth="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-7"
        y="-0.189941"
        width="880"
        height="543.301"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="21" />
        <feGaussianBlur stdDeviation="25" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_f"
        x="112.09"
        y="454.483"
        width="641.82"
        height="6.99399"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
      </filter>
      <pattern
        id={props.patternId}
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref={`#${props.imageId}`}
          transform="translate(0 -0.000341554) scale(0.000260417 0.000416951)"
        />
      </pattern>
      <clipPath id="clip0">
        <rect width="866" height="543" fill="white" />
      </clipPath>
      <image
        id={props.imageId}
        width="3840"
        height="2400"
        xlinkHref={props.imageSrc}
      />
    </defs>
  </svg>
);

LaptopSVG.propTypes = {
  imageSrc: string.isRequired,
  imageId: string.isRequired,
  patternId: string.isRequired,
};

export default LaptopSVG;
