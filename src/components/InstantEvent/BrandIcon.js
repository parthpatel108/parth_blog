import React from "react"
// import { theme } from "Styles"
// import Config from "Data"
import { BrandColor } from "./util/Util"

const BrandIcon = (name) => {
  let brand = name.brand ? name.brand : ""
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="120px"
        height="120px"
        viewBox="0 0 1024 1024">
        <g>
          <g>
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M1004.3,790c0,12.7-10.3,23-23,23c-12.7,0-23-10.3-23-23s10.3-23,23-23C994,767,1004.3,777.3,1004.3,790z"
            />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M910,882c0,16.5-13.4,29.9-29.9,29.9c-16.5,0-29.9-13.4-29.9-29.9c0-16.5,13.4-29.9,29.9-29.9
			C896.6,852.2,910,865.5,910,882z"
            />
            <circle fill={BrandColor(brand.toLowerCase())} cx="757.3" cy="941.5" r="33" />
            <circle fill={BrandColor(brand.toLowerCase())} cx="623.7" cy="972" r="36.6" />
            <circle fill={BrandColor(brand.toLowerCase())} cx="487.1" cy="968.9" r="45.8" />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M408,924.2c0,27.7-22.5,50.2-50.2,50.2s-50.2-22.5-50.2-50.2c0-27.7,22.5-50.2,50.2-50.2S408,896.5,408,924.2
			z"
            />
            <circle fill={BrandColor(brand.toLowerCase())} cx="244" cy="849" r="53.2" />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M200.4,751.3c0,26.1-21.2,47.3-47.3,47.3c-26.1,0-47.3-21.2-47.3-47.3c0-26.1,21.2-47.3,47.3-47.3
			C179.2,703.9,200.4,725.1,200.4,751.3z"
            />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M129.1,632.3c-1.4,23.7-21.7,41.8-45.4,40.4S41.9,651,43.3,627.3c1.4-23.7,21.7-41.8,45.4-40.4
			C112.4,588.3,130.5,608.6,129.1,632.3z"
            />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M97.9,497.8c-1.3,21.3-19.5,37.5-40.8,36.3c-21.3-1.3-37.5-19.5-36.3-40.8c1.3-21.3,19.5-37.5,40.8-36.3
			C82.9,458.2,99.2,476.5,97.9,497.8z"
            />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M98.6,359.5c-1.1,19.2-17.6,33.9-36.8,32.7c-19.2-1.1-33.9-17.6-32.7-36.8c1.1-19.2,17.6-33.9,36.8-32.7
			C85.1,323.9,99.7,340.3,98.6,359.5z"
            />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M130,229c-0.8,13.1-12,23.1-25.1,22.3c-13.1-0.8-23.1-12-22.3-25.1c0.8-13.1,12-23.1,25.1-22.3
			C120.8,204.6,130.8,215.9,130,229z"
            />
            <path
              fill={BrandColor(brand.toLowerCase())}
              d="M201,111c-0.6,10.1-9.3,17.8-19.4,17.2c-10.1-0.6-17.8-9.3-17.2-19.4c0.6-10.1,9.3-17.8,19.4-17.2
			C193.9,92.2,201.6,100.9,201,111z"
            />
          </g>
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M626.8,25.9c0,9.4-7.6,16.9-16.9,16.9c-9.4,0-16.9-7.6-16.9-16.9c0-9.4,7.6-16.9,16.9-16.9
		C619.2,9,626.8,16.6,626.8,25.9z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M890.8,265.5c0,9.4-7.6,16.9-16.9,16.9s-16.9-7.6-16.9-16.9s7.6-16.9,16.9-16.9S890.8,256.2,890.8,265.5z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M833.4,195.6c0,10.5-8.5,19-19,19c-10.5,0-18.9-8.5-18.9-19c0-10.5,8.5-18.9,18.9-18.9
		C824.9,176.6,833.4,185.1,833.4,195.6z"
          />
          <circle fill={BrandColor(brand.toLowerCase())} cx="740.3" cy="143.5" r="21.9" />
          <circle fill={BrandColor(brand.toLowerCase())} cx="655.7" cy="111.1" r="23.9" />
          <circle fill={BrandColor(brand.toLowerCase())} cx="567" cy="105.9" r="26.7" />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M509.6,119.2c0,17.5-14.2,31.8-31.8,31.8S446,136.8,446,119.2s14.2-31.8,31.8-31.8S509.6,101.7,509.6,119.2z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M431.3,159.1c0,19.8-16.1,35.9-35.8,35.9c-19.8,0-35.9-16.1-35.9-35.9c0-19.8,16.1-35.8,35.9-35.8
		C415.2,123.2,431.3,139.3,431.3,159.1z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M361.9,217c0,19.8-16.1,35.9-35.8,35.9c-19.8,0-35.8-16.1-35.8-35.9c0-19.8,16-35.8,35.8-35.8
		C345.8,181.1,361.9,197.2,361.9,217z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M304.9,291.1c0,17.1-13.8,30.9-30.9,30.9c-17.1,0-30.9-13.8-30.9-30.9c0-17.1,13.8-30.9,30.9-30.9
		C291,260.2,304.9,274,304.9,291.1z"
          />
          <circle fill={BrandColor(brand.toLowerCase())} cx="243.1" cy="374.9" r="26.3" />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M257.7,467.3c0,13-10.5,23.5-23.5,23.5c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5
		C247.1,443.8,257.7,454.3,257.7,467.3z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M271.9,554.4c0,10.4-8.4,18.9-18.9,18.9c-10.4,0-18.9-8.4-18.9-18.9c0-10.4,8.4-18.9,18.9-18.9
		C263.4,535.6,271.9,544,271.9,554.4z"
          />
          <circle fill={BrandColor(brand.toLowerCase())} cx="288.9" cy="638.2" r="16.2" />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M516,30.5c0,10.5-8.5,19-19,19c-10.5,0-19-8.5-19-19c0-10.5,8.5-19,19-19C507.5,11.4,516,20,516,30.5z"
          />
          <circle fill={BrandColor(brand.toLowerCase())} cx="390.6" cy="66.3" r="23.5" />
          <circle fill={BrandColor(brand.toLowerCase())} cx="297.5" cy="127.4" r="28.5" />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M259.8,212c0,18.4-14.9,33.4-33.4,33.4c-18.4,0-33.4-14.9-33.4-33.4c0-18.4,14.9-33.4,33.4-33.4
		C244.9,178.6,259.8,193.6,259.8,212z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M214.7,313.6c0,21.5-17.4,38.9-38.9,38.9c-21.5,0-38.9-17.4-38.9-38.9c0-21.5,17.4-38.9,38.9-38.9
		C197.3,274.7,214.7,292.1,214.7,313.6z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M197.6,423.1c0,23.3-18.9,42.2-42.2,42.2c-23.3,0-42.2-18.9-42.2-42.2c0-23.3,18.9-42.2,42.2-42.2
		C178.7,380.9,197.6,399.8,197.6,423.1z"
          />
          <circle fill={BrandColor(brand.toLowerCase())} cx="160.4" cy="531.8" r="40.3" />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M230.7,638.2c0,19.1-15.5,34.6-34.6,34.6s-34.6-15.5-34.6-34.6c0-19.1,15.5-34.6,34.6-34.6
		S230.7,619.1,230.7,638.2z"
          />
          <circle fill={BrandColor(brand.toLowerCase())} cx="258.5" cy="732" r="30.8" />
          <circle fill={BrandColor(brand.toLowerCase())} cx="343" cy="804.9" r="27.2" />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M465.6,855.8c0,13-10.5,23.5-23.5,23.5c-13,0-23.5-10.5-23.5-23.5s10.5-23.5,23.5-23.5
		C455.1,832.2,465.6,842.8,465.6,855.8z"
          />
          <path
            fill={BrandColor(brand.toLowerCase())}
            d="M570.6,875.6c0,10.3-8.3,18.6-18.6,18.6c-10.3,0-18.6-8.3-18.6-18.6c0-10.3,8.3-18.6,18.6-18.6
		C562.2,857,570.6,865.3,570.6,875.6z"
          />
        </g>
      </svg>
    </>
  )
}

export default BrandIcon;
