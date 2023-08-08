import {createIcon} from "@chakra-ui/react";

export const MockIcon = createIcon({
    displayName: 'UpDownIcon',
    viewBox: '0 0 24 24',
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
        <>
            <path d="M43.4612 28.5924C45.9983 17.8431 39.341 7.07242 28.5917 4.53536C17.8424 1.9983 7.07173 8.65561 4.53467 19.4049C1.99761 30.1542 8.65493 40.9249 19.4042 43.4619C30.1535 45.999 40.9242 39.3417 43.4612 28.5924Z" fill="#FF115B"/>
            <path d="M19.383 12.7171C19.0386 12.6623 19.0229 12.6584 19.1873 12.631C19.7131 12.6008 20.2405 12.647 20.753 12.768C21.9273 13.0499 23.0076 13.7623 24.1506 15.0305L24.4559 15.3671L24.8904 15.2967C26.6706 14.9967 28.4996 15.2253 30.1512 15.9543C30.5656 16.1424 30.9591 16.3733 31.3255 16.6432C31.383 16.79 31.4199 16.9441 31.4351 17.1011C31.5665 17.6962 31.5034 18.3178 31.255 18.8743C31.1973 18.9463 31.1621 19.0337 31.1537 19.1256C31.1454 19.2175 31.1643 19.3098 31.2081 19.391C31.2488 19.4748 31.3122 19.5456 31.391 19.5954C31.4699 19.6452 31.561 19.672 31.6543 19.6728C32.0457 19.6728 32.4606 19.0504 32.6563 18.1815L32.7307 17.837L32.8834 18.0093C33.6896 18.8902 34.2439 19.9718 34.4882 21.1407L34.5156 21.3755L34.3747 21.1602C34.178 20.8294 33.9107 20.546 33.5918 20.3304C33.0321 19.9625 32.4411 19.8372 30.8714 19.755C29.851 19.7417 28.8372 19.5903 27.8574 19.3049C26.507 18.8665 25.8259 18.2833 24.2172 16.1735C23.7361 15.5125 23.2034 14.8908 22.624 14.3142C21.7452 13.4449 20.6078 12.8844 19.383 12.7171Z" fill="white"/>
            <path d="M31.6425 14.7954C31.6492 14.3138 31.7489 13.8379 31.9361 13.3941C31.9724 13.2989 32.0197 13.2083 32.077 13.124C32.0628 13.2082 32.0405 13.2908 32.0105 13.3706C31.88 13.8398 31.8599 14.3328 31.9518 14.8111C32.0574 15.547 32.1201 15.6526 32.9029 16.4512C33.2709 16.823 33.6858 17.2927 33.8541 17.4963L34.1359 17.8603L33.8541 17.598C33.4421 17.2229 33.0039 16.8776 32.5428 16.5647C32.4254 16.502 32.4058 16.506 32.3354 16.5647C32.2649 16.6234 32.2532 16.7291 32.2453 17.1988C32.2662 17.778 32.1439 18.3535 31.8891 18.8741C31.76 19.1285 31.7365 19.0737 31.8578 18.788C31.9439 18.5766 31.9518 18.4827 31.9518 17.7742C31.9518 16.3572 31.7834 16.0128 30.7775 15.4256C30.523 15.2769 30.1081 15.0655 29.8537 14.952C29.6986 14.8899 29.5481 14.8166 29.4036 14.7328C29.8745 14.8288 30.3376 14.9597 30.7892 15.1242C31.3724 15.3434 31.4664 15.3747 31.5368 15.3473C31.6073 15.3199 31.619 15.1947 31.6425 14.7954Z" fill="white"/>
            <path d="M20.0485 17.2228C19.3265 16.1937 18.9621 14.9561 19.0112 13.6999L19.0386 13.3633L19.1991 13.3907C19.5666 13.4714 19.9211 13.6031 20.2521 13.7821C20.9136 14.1735 21.2032 14.7059 21.4929 16.0563C21.579 16.4477 21.6925 16.9018 21.7434 17.0505C21.9199 17.4629 22.1376 17.8563 22.3932 18.2248C22.5771 18.491 22.4558 18.6162 22.0487 18.581C21.4342 18.5419 20.5926 17.9626 20.0485 17.2228Z" fill="white"/>
            <path d="M30.7933 24.3547C27.5287 23.0473 26.378 21.9161 26.378 20.002C26.371 19.8307 26.3788 19.6592 26.4014 19.4893C26.5007 19.5509 26.5949 19.6203 26.6833 19.6967C27.3448 20.2212 28.0846 20.4483 30.1396 20.7457C30.9912 20.8453 31.8322 21.0208 32.6525 21.2703C34.6449 21.9279 35.8779 23.2587 36.1754 25.0749C36.2498 25.7495 36.2141 26.4316 36.0697 27.0947C35.9592 27.5132 35.7793 27.9101 35.5374 28.269C35.5139 28.269 35.4904 28.1829 35.4826 28.0576C35.4566 27.7037 35.3589 27.3588 35.1954 27.0438C35.0319 26.7289 34.8059 26.4505 34.5314 26.2257C33.8581 25.6621 32.9657 25.2119 30.7933 24.3547Z" fill="white"/>
            <path d="M28.5033 24.8827C28.4635 24.6501 28.4099 24.4201 28.3428 24.1938L28.2684 23.9629L28.425 24.139C28.6611 24.4182 28.8394 24.7415 28.9495 25.0902C29.0487 25.3766 29.0834 25.6813 29.0513 25.9827C29.0772 26.281 29.0385 26.5814 28.9378 26.8634C28.7999 27.2721 28.571 27.6441 28.2684 27.9515C27.5948 28.5882 26.7196 28.969 25.7946 29.028C25.6028 29.0515 25.0431 29.0906 24.5499 29.118C23.601 29.1311 22.6593 29.2841 21.7551 29.5721C21.6897 29.6012 21.6192 29.6172 21.5476 29.619C21.8168 29.4072 22.113 29.2321 22.4283 29.0984C23.2112 28.7586 24.0415 28.5408 24.8904 28.4526C25.5323 28.343 26.1978 28.2138 26.3661 28.1629C27.9475 27.6815 28.7655 26.4289 28.5033 24.8827Z" fill="white"/>
            <path d="M29.9987 27.5243C29.5757 26.7051 29.4712 25.7583 29.7051 24.8665C29.7286 24.7765 29.7716 24.7061 29.7951 24.7061C29.8761 24.7358 29.9525 24.7766 30.0222 24.8274C30.2218 24.9605 30.621 25.1875 31.6896 25.7668C33.0244 26.4871 33.7838 27.0468 34.3005 27.6848C34.7584 28.2562 35.0581 28.9378 35.1694 29.6615C35.2374 30.3144 35.2097 30.9738 35.0872 31.6187C34.9326 32.2785 34.6408 32.8983 34.2308 33.4378C33.8207 33.9773 33.3017 34.4245 32.7074 34.7501C32.5946 34.8141 32.4783 34.8716 32.359 34.9223C32.3886 34.7974 32.436 34.6775 32.4999 34.5661C32.6964 34.1751 32.8106 33.7479 32.8355 33.3109C32.8604 32.874 32.7955 32.4366 32.6447 32.0258C32.303 31.191 31.8586 30.402 31.3217 29.6772C30.8238 28.9961 30.3814 28.2762 29.9987 27.5243Z" fill="white"/>
            <path d="M17.7312 32.5274C18.9034 31.5313 20.3143 30.8569 21.8255 30.5703C22.5336 30.4774 23.2522 30.5052 23.951 30.6525C24.7746 30.8383 25.5079 31.3046 26.0256 31.9716C26.417 32.5548 26.597 33.0637 26.7732 34.1949C26.8436 34.6372 26.9219 35.0873 26.9454 35.1891C27.0271 35.692 27.2802 36.1511 27.6617 36.4886C28.1745 36.8801 29.0591 36.8801 29.9281 36.5474C30.019 36.5058 30.1151 36.4768 30.2138 36.4612C30.0031 36.6579 29.761 36.8179 29.4975 36.9349C29.1366 37.1279 28.7325 37.2263 28.3232 37.2206C27.5404 37.2206 26.8632 36.8292 26.3113 35.9994C26.1068 35.6521 25.9238 35.2926 25.7633 34.9229C25.1801 33.6038 24.8943 33.2007 24.1976 32.7623C23.9184 32.5742 23.5964 32.4595 23.2611 32.4287C22.9259 32.3979 22.5884 32.452 22.2796 32.5861C22.1063 32.6657 21.9537 32.7844 21.834 32.9328C21.7143 33.0813 21.6307 33.2556 21.5897 33.4418C21.5488 33.6281 21.5516 33.8213 21.5979 34.0063C21.6443 34.1913 21.7329 34.3631 21.8569 34.508C22.1073 34.7684 22.4357 34.9401 22.7924 34.9973C22.9383 35.0222 23.088 35.0145 23.2306 34.9747C23.3732 34.9348 23.5052 34.8639 23.6171 34.767C23.729 34.67 23.8181 34.5495 23.8778 34.414C23.9376 34.2785 23.9666 34.1315 23.9627 33.9835C23.9711 33.8118 23.9228 33.6421 23.8252 33.5006C23.7275 33.3592 23.5861 33.2537 23.4226 33.2007C22.8941 32.9619 22.3266 33.2398 22.3305 33.733C22.331 33.8224 22.3591 33.9095 22.4109 33.9823C22.4628 34.0552 22.5358 34.1103 22.6201 34.1401C22.7532 34.2027 22.7571 34.2066 22.6475 34.1831C22.1622 34.0853 22.0487 33.506 22.4401 33.1185C22.9059 32.6566 23.8727 32.8601 24.2054 33.5099C24.3457 33.8653 24.3567 34.2587 24.2367 34.6215C24.086 34.9705 23.8134 35.2528 23.4698 35.4155C23.1262 35.5783 22.7352 35.6105 22.3696 35.5062C21.8216 35.3652 21.5868 35.2165 20.937 34.5393C19.7901 33.3651 19.3439 33.1341 17.6882 32.8797L17.3711 32.8288L17.7312 32.5274Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3491 11.4956C16.1812 16.134 18.8194 18.0246 19.1129 18.4278C19.3556 18.7605 19.2656 19.0619 18.8507 19.2968C18.5562 19.4443 18.2358 19.5334 17.9074 19.559C17.8436 19.5667 17.7789 19.5617 17.7171 19.5442C17.6553 19.5268 17.5975 19.4972 17.5472 19.4572C17.3907 19.3085 17.3006 19.3359 16.5021 17.9228C15.3905 16.2084 14.4628 14.7914 14.4354 14.764C14.408 14.7366 14.3806 14.7131 16.3925 18.2869C16.4893 18.4564 16.5457 18.6459 16.5572 18.8408C16.5688 19.0356 16.5352 19.2305 16.4591 19.4103C16.4591 19.6256 16.4004 19.7391 16.1303 20.0366C15.684 20.5337 15.4844 21.0895 15.3474 22.2403C15.1869 23.532 14.7329 24.444 13.4725 26.0019C13.0672 26.4415 12.7175 26.9292 12.4313 27.4541C12.2105 27.854 12.0985 28.3048 12.1064 28.7615C12.0679 29.3068 12.1412 29.8542 12.3217 30.3703C12.5042 30.9217 12.7681 31.4428 13.1045 31.9164C13.3821 32.2742 13.5881 32.6822 13.7112 33.1181C13.7112 33.2551 13.7386 33.2551 14.3336 33.1181C15.7545 32.7971 16.9092 32.2374 17.559 31.5524C17.7347 31.399 17.8716 31.2064 17.9587 30.9901C18.0458 30.7737 18.0805 30.5399 18.06 30.3076C18.0884 30.074 18.0476 29.8372 17.9426 29.6265C17.7743 29.2664 17.465 28.9689 16.7683 28.511C15.8798 27.9082 15.5001 27.4189 15.3944 26.7535C15.3083 26.2015 15.3944 25.8179 15.8993 24.7963C16.3349 24.0034 16.5814 23.1206 16.6196 22.2168C16.6783 21.524 16.7526 21.2539 16.9523 21.0425C17.0696 20.9186 17.211 20.8199 17.3679 20.7526C17.5247 20.6853 17.6936 20.6508 17.8643 20.6511C18.5316 20.6092 19.1674 20.3524 19.6766 19.9191C19.8493 19.7753 19.9891 19.596 20.0863 19.3934C20.1836 19.1908 20.2361 18.9696 20.2403 18.7448L20.2598 18.3534L20.0485 18.0912C19.2656 17.1987 11.8285 10.7832 11.7737 10.7832C11.7189 10.7832 12.0281 11.1081 12.3491 11.4956ZM14.134 29.4621C14.2165 29.3132 14.2405 29.1388 14.2014 28.9731C14.1623 28.8074 14.0629 28.6622 13.9226 28.5658C13.6447 28.3857 13.218 28.4718 13.218 28.7067C13.218 28.7811 13.2572 28.8319 13.3511 28.8789C13.4451 28.9259 13.5116 29.0472 13.3942 29.2273C13.2768 29.4073 13.2807 29.5678 13.4216 29.6774C13.4807 29.717 13.5479 29.743 13.6183 29.7535C13.6887 29.764 13.7606 29.7588 13.8287 29.7382C13.8968 29.7176 13.9595 29.6822 14.0123 29.6344C14.0651 29.5867 14.1067 29.5279 14.134 29.4621Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8 20.8586C20.5847 20.9382 20.3912 21.0677 20.2354 21.2364C20.0796 21.4051 19.966 21.6083 19.9037 21.8293C19.8323 22.1206 19.8584 22.4272 19.978 22.7022C20.1542 22.9371 20.3225 22.9958 20.7609 22.9958C21.6612 22.9958 22.4401 22.6044 22.5301 22.1268C22.5338 21.8805 22.4658 21.6384 22.3345 21.4299C22.2032 21.2214 22.0141 21.0556 21.7904 20.9525C21.4762 20.8265 21.1323 20.7939 20.8 20.8586ZM21.8491 21.6728C21.8816 21.6282 21.9035 21.5767 21.9129 21.5224C21.9224 21.468 21.9193 21.4122 21.9038 21.3592C21.8883 21.3063 21.8608 21.2576 21.8235 21.2169C21.7862 21.1763 21.74 21.1447 21.6886 21.1248C21.2424 20.8508 20.5652 21.0778 20.5652 21.5162C20.5652 21.7276 20.9175 21.9546 21.2424 21.9546C21.4735 21.9429 21.691 21.8418 21.8491 21.6728Z" fill="white"/>
        </>

    ),
})
