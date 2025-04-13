import Header from "../components/Header";
import Footer from "@/components/Footer";
import Head from 'next/head';

const schemaData = {
  "@context": "http://schema.org",
  "@type": "Restaurant",
  "name": "MrBurger",
  "address": {
    "@type": "Seifertova 1840/2, Prague",
    "streetAddress": "Seifertova 1840/2, Prague 130 00",
    "addressLocality": "Prague",
    "addressRegion": "Prague",
    "postalCode": "130 00",
    "addressCountry": "Czech Republic"
  },
  "telephone": "+420 736 700 880",
  "url": "https://by-bc.com",
  "image": "https://by-bc.com/images/B&C.png"
};


export default function Home() {
  return (
    <div>
      <Head>
      <title>B&C - Be Brave and Creative</title>
      <meta name="description" content="MrBurger and Pizzaiolo - Delicious Burgers & Pizza Delivered Fresh!" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="MrBurger and Pizzaiolo by B&C" />
      <meta property="og:description" content="MrBurger and Pizzaiolo - Delicious Burgers & Pizza Delivered Fresh!" />
      <meta property="og:image" content="https://by-bc.com/images/B&C.png" />
      <meta property="og:url" content="https://by-bc.com" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <Header />
      <main>
  <section className="w-full flex justify-center lg:mb-[170px] mb-[100px]">
    <div className="w-full ">
      <img 
        src="/images/B&C.png" 
        alt="B&C - Be Brave and Creative Prague" 
        className="w-full lg:h-[709px]"
      />
    </div>
  </section>
  <section className="max-w-[800px] mx-auto text-center flex flex-col justify-center items-center lg:mb-[170px] mb-[100px]">
  {/* SVG Quote Icon */}
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="77" height="50" viewBox="0 0 77 50" fill="none"   className="ml-[15px] mb-[-40px] fill-[#141414] opacity-15"
  >
<path d="M50.3504 41.5C45.4837 41.5 42.4171 39.0667 41.1504 34.2C39.8837 29.5333 40.5504 24.5 43.1504 19.1C45.8171 13.5 49.5504 10.1 54.3504 8.9C55.4171 8.63333 56.5171 8.5 57.6504 8.5V12C53.9171 12 50.8837 13.8 48.5504 17.4C46.7504 20.2667 46.3171 22.7 47.2504 24.7C47.7837 25.9 48.8171 26.5 50.3504 26.5C52.3504 26.5 54.0671 27.2333 55.5004 28.7C56.9337 30.1667 57.6504 31.9333 57.6504 34C57.6504 36.0667 56.9337 37.8333 55.5004 39.3C54.0671 40.7667 52.3504 41.5 50.3504 41.5ZM29.3504 41.5C24.4837 41.5 21.4171 39.0667 20.1504 34.2C18.8837 29.5333 19.5504 24.5 22.1504 19.1C24.8171 13.5 28.5504 10.1 33.3504 8.9C34.4171 8.63333 35.5171 8.5 36.6504 8.5V12C32.9171 12 29.8837 13.8 27.5504 17.4C25.7504 20.2667 25.3171 22.7 26.2504 24.7C26.7837 25.9 27.8171 26.5 29.3504 26.5C31.3504 26.5 33.0671 27.2333 34.5004 28.7C35.9337 30.1667 36.6504 31.9333 36.6504 34C36.6504 36.0667 35.9337 37.8333 34.5004 39.3C33.0671 40.7667 31.3504 41.5 29.3504 41.5Z" fill="#141414" fill-opacity="0.95"/></svg>
  {/* Quote Text */}
  <p className="text-[rgba(20,20,20,0.95)] text-center font-[Montserrat] text-[17px] italic font-normal leading-[29px]">
    "I was enough creative to come up with an<br></br> interesting concept, and enough brave to do it"
  </p>
  <svg xmlns="http://www.w3.org/2000/svg" width="77" height="50" viewBox="0 0 77 50" fill="none" className="ml-[330px] mt-[-40px] fill-[#141414] opacity-15">
  <path d="M26.8498 8.5C31.7165 8.5 34.7831 10.9333 36.0498 15.8C37.3165 20.4667 36.6498 25.5 34.0498 30.9C31.3831 36.5 27.6498 39.9 22.8498 41.1C21.7831 41.3667 20.6831 41.5 19.5498 41.5L19.5498 38C23.2831 38 26.3165 36.2 28.6498 32.6C30.4498 29.7333 30.8831 27.3 29.9498 25.3C29.4165 24.1 28.3831 23.5 26.8498 23.5C24.8498 23.5 23.1331 22.7667 21.6998 21.3C20.2665 19.8333 19.5498 18.0667 19.5498 16C19.5498 13.9333 20.2665 12.1667 21.6998 10.7C23.1331 9.23333 24.8498 8.5 26.8498 8.5ZM47.8498 8.5C52.7165 8.50001 55.7831 10.9333 57.0498 15.8C58.3165 20.4667 57.6498 25.5 55.0498 30.9C52.3831 36.5 48.6498 39.9 43.8498 41.1C42.7831 41.3667 41.6831 41.5 40.5498 41.5L40.5498 38C44.2831 38 47.3165 36.2 49.6498 32.6C51.4498 29.7333 51.8831 27.3 50.9498 25.3C50.4165 24.1 49.3831 23.5 47.8498 23.5C45.8498 23.5 44.1331 22.7667 42.6998 21.3C41.2665 19.8333 40.5498 18.0667 40.5498 16C40.5498 13.9333 41.2665 12.1667 42.6998 10.7C44.1331 9.23334 45.8498 8.5 47.8498 8.5Z" fill="#141414" fill-opacity="0.95"/>
</svg>
  </div>

  <h3 className="text-[rgba(20,20,20,0.95)] lg:mt-[-10px] lg:ml-[400px] text-right font-[Marcellus] text-[24px] font-normal leading-[56px] ">
  B&C CEO
</h3>


<div className="flex justify-center px-4">
  <div className="lg:w-[885px] flex items-center text-left gap-6 bg-gray-100 rounded-lg mt-6 text-gray-800 text-sm md:text-[17px] font-montserrat text-[17px] leading-[29px] p-6">
  This is the main idea that represents our company. We are a team of brave and creative, driven by passion, food lovers who wants to share joy to customers through food. Our main goal is to create a brand of interesting concepts that are based on high quality ingredients and delicious food. For now, we have created two different concepts that are focused on American and Italian cuisine.  </div>
</div>


</section>

<section className="lg:mb-[170px] mb-[100px]">
<div class="flex items-center justify-center text-center">
  <div class="flex-grow border-b-4 border-black "></div>
  <div class="text-black text-6xl font-normal tracking-tight leading-7 font-[Marcellus] px-5">Our Concepts</div>
  <div class="flex-grow border-b-4 border-black "></div>
</div>
</section>


<section className="lg:mb-[170px] mb-[100px]">
<div class="flex flex-wrap justify-center items-center gap-[25px] max-w-[1280px] mx-auto p-4">
  <div class="flex flex-col items-center lg:p-[80px] p-4 border border-black w-[370px] lg:w-[560px] h-[630px] flex-shrink-0">
 <h3 class="text-[#141414] mb-[11px] text-center text-[16px] font-semibold leading-[20px] uppercase font-[Montserrat]">
  Reserve a table
</h3>
<a href="tel:+420775093074" class="text-[#141414] mb-[21px] text-center text-[16px] font-semibold leading-[20px] uppercase font-[Montserrat] block">
  +420 775 093 074
</a>

<h4 class="text-[#1B2C3D] mb-[21px]  text-center text-[45px] font-normal leading-[56px] font-[Bellefair]">
MrBurger</h4>

    <hr class="w-full mb-[21px]  lg:w-[250px] border-t-2 border-[#141414]"></hr>
    
    
    <p class="text-[#4D5257] mb-[21px]  text-center text-[14px] font-normal leading-[26px] font-[Montserrat]">
    MrBurger is a burger fast food restaurant that offers a variety of beef and chicken burgers. The biggest secret beside our bordless creativity is a premium meat from a famous czech butcher and that is the main secret of our concept. MrBurger offers you a possibility to try our burgers in brioche bun or croissant. Our great rating shows you that we are really trying hard to keep the exceptional quality and delicious products all the time. If you would like to give it a try, you can order our burgers online</p>


    <div class="flex justify-center mb-[21px]  items-center gap-[40px] ">
       <a href="https://wolt.com/cs/cze/prague/restaurant/mrburger-by-bc" target="_blank" rel="noopener noreferrer">
  <img src="/images/Rectangle 5 (1).png" alt="BC Czech Republic" class="w-[81px] h-[81px] object-cover" />
</a>

    <div class="w-px h-[40px] bg-black"></div>
    <a href="https://food.bolt.eu/en-US/271-prague/p/64495-mrburger-by-b%26c" target="_blank" rel="noopener noreferrer">
    <img src="/images/Rectangle 4 (1).png" alt="BC Czech Republic" class="w-[81px] h-[81px] object-cover"></img>
</a>
    </div>
  </div>
 <div className="flex space-x-[25px] justify-center items-center px-4 lg:px-0">
  <div class="w-[175px] md:w-[250px] lg:w-[297px] h-[560px] flex-shrink-0 bg-gray-300">
    <img src="/images/Rectangle 3 (1).png" alt="B&C Prague" class="w-full h-full object-cover"></img>
  </div>

  <div class="w-[175px] md:w-[250px] lg:w-[221px] h-[460px] flex-shrink-0 bg-gray-300">
    <img src="/images/Rectangle 2 (1).png" alt="B&C Czech Republic" class="w-full h-full object-cover"></img>
  </div>
  </div>
</div>

</section>

<section className="lg:mb-[170px] mb-[100px]">
<section
  className="flex flex-col justify-center items-center h-[379px] lg:h-[423px] lg:min-w-[1024px] w-full bg-cover bg-center bg-no-repeat lg:px-0 px-4"
  style={{
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url('/images/Background (2).png')`,
  }}
>
  {/* First Text */}
  <p className="text-white text-center font-[Montserrat] text-[24px] font-normal leading-[25px] py-4 lg:py-0">
  Auguste Escoffier  </p>

  {/* Space */}
  <div className="lg:block hidden h-[15px]"></div>

  {/* Second Text */}
  <h2 className="text-white text-center font-[Marcellus] text-[35px] lg:text-[57px] font-normal lg:leading-[67px] py-4 lg:py-0">
  “Good food is the foundation of <br></br> genuine hapiness”  </h2>
</section>

</section>

<section className="lg:mb-[170px] mb-[100px]">
<div class="flex flex-wrap justify-center items-center gap-[25px] max-w-[1280px] mx-auto p-4">
<div className="flex space-x-[25px] justify-center items-center px-4 lg:px-0">

<div class="w-[175px] md:w-[250px] lg:w-[221px] h-[460px] flex-shrink-0 bg-gray-300">
    <img src="/images/Rectangle 2 (2).png" alt="B&C Czech Republic" class="w-full h-full object-cover"></img>
  </div>
  <div class="w-[175px] md:w-[250px] lg:w-[297px] h-[560px] flex-shrink-0 bg-gray-300">
    <img src="/images/Rectangle 3 (2).png" alt="B&C Czech Republic" class="w-full h-full object-cover"></img>
  </div>
</div>
  <div class="flex flex-col items-center lg:p-[80px] p-4 border border-black w-[370px] lg:w-[560px] h-[630px] flex-shrink-0">
 <h3 class="text-[#141414] mb-[11px] text-center text-[16px] font-semibold leading-[20px] uppercase font-[Montserrat]">
  Reserve a table
</h3>
<a href="tel:+420 606 092 130" class="text-[#141414] mb-[21px] text-center text-[16px] font-semibold leading-[20px] uppercase font-[Montserrat] block">
  +420 606 092 130
</a>
<h4 class="text-[#1B2C3D] mb-[21px]  text-center text-[45px] font-normal leading-[56px] font-[Bellefair]">
Pizzaiolo</h4>

    <hr class="w-full mb-[21px]  lg:w-[250px] border-t-2 border-[#141414]"></hr>
    
    
    <p class="text-[#4D5257] mb-[21px]  text-center text-[14px] font-normal leading-[26px] font-[Montserrat]">
    “Pizzaiolo” that means a pizza chef in Italian language is a concept that was established in December 2024. It is neither a restaurant, nor fast food. Pizzaiolo is a ‘’fast casual’’ pizzeria, that offers a delicious and creative menu made from high quality ingredients, a pleasant ambient and always smiling team; and as our other concept, it is also self service model. You want a premium burrata, a glass of premium red wine, or a delicious pizza made from Neapolitan ‘’pizzaiolo’’, then it is a great location for you.
     </p> 
     <p class="text-[#4D5257] mb-[21px]  text-center text-[14px] font-normal leading-[26px] font-[Montserrat]">
 
Our partly menu is already available online, so give it a try </p>

    <div class="flex justify-center mb-[21px]  items-center gap-[40px] ">
    <a href="https://wolt.com/cs/cze/prague/restaurant/pizzaiolo12" target="_blank" rel="noopener noreferrer">
  <img src="/images/Rectangle 5 (1).png" alt="BC Czech Republic" class="w-[81px] h-[81px] object-cover" />
</a>

    <div class="w-px h-[40px] bg-black"></div>
    <a href="https://food.bolt.eu/en-US/271/p/124743-pizzaiolo-by-b%26c" target="_blank" rel="noopener noreferrer">
    <img src="/images/Rectangle 4 (1).png" alt="BC Czech Republic" class="w-[81px] h-[81px] object-cover"></img>
</a>
    </div>
  </div>
</div>
</section>

<section className="lg:mb-[170px] mb-[100px]">
<div class="flex flex-col lg:flex-row justify-center max-w-screen-lg mx-auto px-4 lg:px-0">
  <div class="flex flex-col justify-center items-center flex-1 p-[40px_45px_20px_45px] max-w-full border-2 border-gray-50 shadow-sm">
    <div class="mb-4 flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="55" viewBox="0 0 61 55" fill="none">
  <path d="M16.0851 36.8143C17.9875 30.4995 21.4236 24.7539 26.0869 20.0901C30.7501 15.4264 36.4955 11.9898 42.8101 10.0868M28.0001 32.0018L28.8851 32.8868M38.0001 22.0018L38.8851 22.8868M40.5001 34.5018L41.3851 35.3868M19.4551 13.4518C24.602 8.30614 30.8758 4.42887 37.7801 2.12684C39.1201 1.67684 40.5376 2.46684 40.9426 3.82184L52.8901 43.6418C53.0257 44.0926 53.0367 44.5717 52.9217 45.0282C52.8068 45.4846 52.5704 45.9014 52.2376 46.2343C51.9047 46.5671 51.4879 46.8036 51.0314 46.9185C50.575 47.0334 50.0959 47.0224 49.6451 46.8868L9.82512 34.9418C8.47012 34.5368 7.68012 33.1193 8.12762 31.7768C10.4296 24.8725 14.3094 18.5987 19.4551 13.4518Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    <h3 class="text-[#121D27] text-center text-[30px] font-normal leading-[38px] mb-2">Delicious Pizza</h3>
    <p class="text-[#4D5257] text-center text-[14px] font-normal leading-[26px] mb-1">Handcrafted with the freshest ingredients, our pizzas are baked to perfection in a stone-fired oven. Every slice is a burst of flavor, from our classic Margherita to our bold specialty creations.</p>
  </div>

  <div class="flex flex-col justify-center items-center flex-1 p-[40px_45px_20px_45px] max-w-full border-2 border-gray-50 shadow-sm">
    <div class="mb-4 flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M10.4167 24.5C9.3116 24.5 8.25179 24.061 7.47039 23.2796C6.68899 22.4982 6.25 21.4384 6.25 20.3333C6.25 16.4656 8.22544 12.7563 11.7417 10.0214C15.2581 7.28645 20.0272 5.75 25 5.75C29.9728 5.75 34.7419 7.28645 38.2582 10.0214C41.7746 12.7563 43.75 16.4656 43.75 20.3333C43.75 21.4384 43.311 22.4982 42.5296 23.2796C41.7482 24.061 40.6884 24.5 39.5833 24.5L32.2917 33.0417C30.625 35.125 27.2917 35.3333 25.2083 33.6667L14.5833 24.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.3753 32.8333H8.33366C7.22859 32.8333 6.16878 32.3943 5.38738 31.6129C4.60598 30.8315 4.16699 29.7717 4.16699 28.6667C4.16699 27.5616 4.60598 26.5018 5.38738 25.7204C6.16878 24.939 7.22859 24.5 8.33366 24.5H41.667C42.7721 24.5 43.8319 24.939 44.6133 25.7204C45.3947 26.5018 45.8337 27.5616 45.8337 28.6667C45.8337 29.7717 45.3947 30.8315 44.6133 31.6129C43.8319 32.3943 42.7721 32.8333 41.667 32.8333H32.7087M10.417 32.8333C9.31192 32.8333 8.25212 33.2723 7.47071 34.0537C6.68931 34.8351 6.25033 35.8949 6.25033 37C6.25033 40.5417 8.95866 43.25 12.5003 43.25H37.5003C41.042 43.25 43.7503 40.5417 43.7503 37C43.7503 35.8949 43.3113 34.8351 42.5299 34.0537C41.7485 33.2723 40.6887 32.8333 39.5837 32.8333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    <h3 class="text-[#121D27] text-center text-[30px] font-normal leading-[38px] mb-2">Juicy Burgers</h3>
    <p class="text-[#4D5257] text-center text-[14px] font-normal leading-[26px] mb-1">Sink your teeth into our mouthwatering burgers, made with 100% premium beef and grilled to juicy perfection. Topped with fresh ingredients and served on toasted buns, every bite is pure satisfaction.</p>
  </div>
</div>
</section>

<section className="flex flex-col justify-center items-center align-self-stretch lg:mb-[170px] mb-[100px] px-4">
  <div className="flex flex-col justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="161" height="114" viewBox="0 0 161 114" fill="none">
  <path d="M64.9355 79.212C62.542 77.1673 61.3791 74.2561 61.3791 70.3021C61.3791 66.3482 62.3662 64.6963 64.3811 62.4485C65.1924 61.5548 66.1255 60.7153 67.1667 59.9705C67.2344 59.9163 67.3155 59.8622 67.3966 59.8216C67.2884 59.7132 67.1803 59.6185 67.0721 59.5237C64.8409 57.5738 61.9741 56.3551 58.8368 56.2062C58.6069 56.2062 58.3635 56.1926 58.1336 56.1926V56.0437C59.0126 56.0437 59.8645 55.9489 60.7029 55.7864C60.7029 55.7864 60.73 55.7864 60.7435 55.7864C65.0978 54.8792 68.6407 51.7512 70.1417 47.6348C70.6285 46.2808 70.899 44.8184 70.899 43.2747C70.899 40.3499 69.9118 37.6417 68.2486 35.4887C67.5454 34.568 66.707 33.742 65.7739 33.0379C65.6928 32.9702 65.6116 32.916 65.517 32.8618C63.4345 31.3723 60.8787 30.4922 58.1336 30.4922H27.248V83.5721H58.1336C60.8382 83.5721 63.3669 82.7868 65.5035 81.4191C65.5035 81.4191 65.5305 81.4191 65.544 81.4056C65.6928 81.3108 65.8415 81.2025 65.9768 81.1077C66.2607 80.9046 66.5312 80.7015 66.8016 80.4713C66.4906 80.3088 66.1796 80.1328 65.8956 79.9432C65.5576 79.713 65.2465 79.4828 64.9626 79.2391L64.9355 79.212ZM42.7449 39.5239H48.2486C52.1567 39.5239 54.3744 41.5415 54.3744 45.1433C54.3744 48.7452 52.1567 50.7628 48.2486 50.7628H42.7449V39.5239ZM48.9789 74.2561H42.8802V63.4776H48.9789C52.7381 63.4776 54.8612 65.4004 54.8612 68.8668C54.8612 72.3333 52.7381 74.2561 48.9789 74.2561Z" fill="#141414"/>
  <path d="M117.146 46.0786C120.756 46.0786 123.975 47.8389 125.963 50.5606H133.779V34.9887C133.738 34.9481 133.684 34.921 133.63 34.8804C133.387 34.7043 133.143 34.5283 132.9 34.3523C132.602 34.1492 132.305 33.9461 131.994 33.7429C131.683 33.5398 131.372 33.3638 131.061 33.1742C130.75 32.9847 130.425 32.8086 130.101 32.6326C129.776 32.4566 129.452 32.2941 129.127 32.1316C129.113 32.1316 129.1 32.1181 129.086 32.1181C128.762 31.9691 128.451 31.8202 128.126 31.6847C127.842 31.5629 127.545 31.4275 127.247 31.3191C127.207 31.3056 127.153 31.2785 127.099 31.265C126.815 31.1431 126.531 31.0348 126.233 30.94C125.936 30.8317 125.638 30.7369 125.327 30.6421C125.124 30.5744 124.921 30.5067 124.705 30.4525C123.799 30.1953 122.866 29.9786 121.919 29.8026C121.717 29.762 121.541 29.7349 121.338 29.7078C121.013 29.6536 120.689 29.613 120.364 29.5724C120.067 29.5318 119.769 29.5047 119.458 29.4776C119.08 29.437 118.688 29.4099 118.309 29.4099C117.93 29.3964 117.538 29.3828 117.146 29.3828C116.754 29.3828 116.524 29.3828 116.213 29.3964C115.969 29.3964 115.74 29.4099 115.496 29.437C108.329 29.8974 101.649 33.3232 96.8621 38.3062C96.8215 38.3468 96.7809 38.3874 96.7404 38.4281C95.4828 39.8228 94.3604 41.3258 93.4003 42.9507C94.0088 43.3975 94.6038 43.885 95.1853 44.4402L96.4699 45.6453L95.3205 46.9859L91.0879 51.6845L90.2225 51.0346C90.1278 51.4137 90.0602 51.8199 89.9926 52.2126C89.7357 53.6615 89.6004 55.1645 89.5869 56.6946V56.9925C89.5869 58.8205 89.7627 60.6079 90.1008 62.3411L90.209 62.5036C91.0474 61.5964 91.7235 60.4996 92.2373 59.2538L92.927 57.6018L101.744 61.312L101.068 62.964C100.662 63.966 100.067 65.0764 99.3232 66.2544C98.1197 68.1637 97.0649 69.4907 96.0778 70.3167L105.206 81.894C108.343 83.3971 111.805 84.3449 115.469 84.5616C115.577 84.5616 115.686 84.5751 115.794 84.5751C116.24 84.6022 116.7 84.6157 117.146 84.6157C123.393 84.6157 129.154 82.5304 133.765 79.0234V63.4785H125.949C123.961 66.1867 120.756 67.9606 117.132 67.9606C111.101 67.9606 106.206 63.0723 106.206 57.0331C106.206 50.9939 111.101 46.1057 117.132 46.1057L117.146 46.0786Z" fill="#141414"/>
  <path d="M93.6034 70.0451L94.9286 68.9212C95.7535 68.2306 96.7136 66.9984 97.8089 65.2787C98.4986 64.1819 99.0395 63.1799 99.4046 62.2591L93.8874 59.9436C93.2924 61.3925 92.4946 62.6518 91.5345 63.7215L90.669 64.6694L89.9929 65.4141L83.8131 56.1657C82.8259 54.6762 82.3121 53.2003 82.3121 51.7921C82.3121 50.3838 82.7042 49.5037 83.4885 48.7318C84.2593 47.96 85.2735 47.5538 86.4364 47.5538C87.5994 47.5538 88.6136 47.8788 89.6819 48.5152C90.0875 48.7589 90.4256 48.9756 90.7096 49.1787C90.7637 49.2193 90.8042 49.2464 90.8583 49.287L93.9956 45.807C93.9956 45.807 93.9956 45.807 93.9821 45.7935C93.5088 45.3602 93.0219 44.954 92.5351 44.5884C91.575 43.8571 90.6149 43.2749 89.6278 42.8416C87.7346 42.0156 85.4899 41.6094 82.9747 41.6094C80.4595 41.6094 79.2019 41.8531 77.7414 42.3406C76.3215 42.801 75.2668 43.3561 74.5501 43.9926C73.8334 44.6154 73.2384 45.3602 72.7786 46.2268C72.1836 47.3236 71.9673 48.0413 71.8997 48.461C71.778 49.1245 71.7103 49.788 71.7103 50.438C71.7103 52.117 72.4135 54.1211 73.7793 56.3553L74.9152 58.1969L72.8868 58.9687C71.2911 59.5645 69.8713 60.3092 68.6272 61.1488C68.4784 61.2435 68.3432 61.3383 68.208 61.4331C67.2614 62.1101 66.423 62.8684 65.6928 63.6673C63.9889 65.5495 63.1641 67.7296 63.1641 70.3023C63.1641 72.8751 64.1242 76.1655 66.0985 77.8446C66.3283 78.0477 66.5853 78.2372 66.8693 78.4133C67.2614 78.6841 67.7077 78.9143 68.1674 79.1174C70.0606 79.9975 72.5082 80.4309 75.4696 80.4309C79.6887 80.4309 83.2045 79.334 86.2066 77.0863L87.6264 76.0166L90.331 79.6184H101.136L100.852 79.2663L93.5899 70.0586L93.6034 70.0451ZM82.6636 72.3335C81.2708 73.7282 79.6211 74.4323 77.7549 74.4323C75.8888 74.4323 74.8882 73.9584 73.7658 73.0105C72.5352 72.0085 71.8861 70.6138 71.8861 68.9753C71.8861 67.3369 72.3053 66.4703 73.1437 65.4006C73.9821 64.3308 75.1856 63.5996 76.7137 63.2611L77.8766 63.0038L83.7454 71.2502L82.6772 72.3199L82.6636 72.3335Z" fill="#141414"/>
</svg>
<h1 className="text-[#1B2C3D] text-center font-Marcellus text-[45px] font-normal leading-[56px]">
  Some kind words from our customers
</h1>
<div className="flex flex-col justify-center items-center mt-[60px] mx-auto">
<div className="flex">
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="50" viewBox="0 0 77 50" fill="none"   className="lg:mr-[-75px] mr-[-45px] mt-[-10px] fill-[#141414] opacity-15"
  >
<path d="M50.3504 41.5C45.4837 41.5 42.4171 39.0667 41.1504 34.2C39.8837 29.5333 40.5504 24.5 43.1504 19.1C45.8171 13.5 49.5504 10.1 54.3504 8.9C55.4171 8.63333 56.5171 8.5 57.6504 8.5V12C53.9171 12 50.8837 13.8 48.5504 17.4C46.7504 20.2667 46.3171 22.7 47.2504 24.7C47.7837 25.9 48.8171 26.5 50.3504 26.5C52.3504 26.5 54.0671 27.2333 55.5004 28.7C56.9337 30.1667 57.6504 31.9333 57.6504 34C57.6504 36.0667 56.9337 37.8333 55.5004 39.3C54.0671 40.7667 52.3504 41.5 50.3504 41.5ZM29.3504 41.5C24.4837 41.5 21.4171 39.0667 20.1504 34.2C18.8837 29.5333 19.5504 24.5 22.1504 19.1C24.8171 13.5 28.5504 10.1 33.3504 8.9C34.4171 8.63333 35.5171 8.5 36.6504 8.5V12C32.9171 12 29.8837 13.8 27.5504 17.4C25.7504 20.2667 25.3171 22.7 26.2504 24.7C26.7837 25.9 27.8171 26.5 29.3504 26.5C31.3504 26.5 33.0671 27.2333 34.5004 28.7C35.9337 30.1667 36.6504 31.9333 36.6504 34C36.6504 36.0667 35.9337 37.8333 34.5004 39.3C33.0671 40.7667 31.3504 41.5 29.3504 41.5Z" fill="#141414" fill-opacity="0.95"/></svg>
<div className="flex justify-center items-center text-center mx-auto w-full lg:w-auto">
  <p className="lg:block hidden mb-[32px] text-[#000] lg:px-0 px-4 font-Montserrat text-[17px] italic font-normal leading-[29px]">
    Seamless service, first-class burgers and friendly staff. If you love burgers, pop in: you’ll not regret it.<br />
    The food is cooked on demand so it’s fresh, juicy and crunchy. I tried the croissant burger which was <span className="!text-black">🔝🔝</span>.<br />
    I’ll come back for breakfast.
  </p>
  <p className="lg:hidden block mb-[32px] text-[#000] lg:px-0 px-4 font-Montserrat text-[17px] italic font-normal leading-[29px]">
    Seamless service, first-class burgers and friendly staff. If you love burgers, pop in: you’ll not regret it.
    The food is cooked on demand so it’s fresh, juicy and crunchy. I tried the croissant burger which was <span className="text-black !important">🔝🔝</span>.
  </p>
</div>

</div>
<h1 className="text-[#121D27] text-center font-Bellefair text-[24px] font-normal leading-[26px] mb-2">
  Local guide about MrBurger
</h1>
<div className="flex flex-rpw space-x-2 mb-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>

</div>
<h2 className="text-[#121D27] text-center font-Montserrat text-[13px] font-normal leading-[26px]">
  on google reviews.
</h2>

</div>


<div className="flex flex-col justify-center items-center mt-[60px] mx-auto">
<div className="flex">
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="50" viewBox="0 0 77 50" fill="none"   className="lg:mr-[-45px] mr-[-55px] mt-[-10px] fill-[#141414] opacity-15"
  >
<path d="M50.3504 41.5C45.4837 41.5 42.4171 39.0667 41.1504 34.2C39.8837 29.5333 40.5504 24.5 43.1504 19.1C45.8171 13.5 49.5504 10.1 54.3504 8.9C55.4171 8.63333 56.5171 8.5 57.6504 8.5V12C53.9171 12 50.8837 13.8 48.5504 17.4C46.7504 20.2667 46.3171 22.7 47.2504 24.7C47.7837 25.9 48.8171 26.5 50.3504 26.5C52.3504 26.5 54.0671 27.2333 55.5004 28.7C56.9337 30.1667 57.6504 31.9333 57.6504 34C57.6504 36.0667 56.9337 37.8333 55.5004 39.3C54.0671 40.7667 52.3504 41.5 50.3504 41.5ZM29.3504 41.5C24.4837 41.5 21.4171 39.0667 20.1504 34.2C18.8837 29.5333 19.5504 24.5 22.1504 19.1C24.8171 13.5 28.5504 10.1 33.3504 8.9C34.4171 8.63333 35.5171 8.5 36.6504 8.5V12C32.9171 12 29.8837 13.8 27.5504 17.4C25.7504 20.2667 25.3171 22.7 26.2504 24.7C26.7837 25.9 27.8171 26.5 29.3504 26.5C31.3504 26.5 33.0671 27.2333 34.5004 28.7C35.9337 30.1667 36.6504 31.9333 36.6504 34C36.6504 36.0667 35.9337 37.8333 34.5004 39.3C33.0671 40.7667 31.3504 41.5 29.3504 41.5Z" fill="#141414" fill-opacity="0.95"/></svg>
<div className="flex justify-center items-center text-center mx-auto w-full lg:w-auto">
  <p className="lg:block hidden mb-[32px] text-[#000] lg:px-0 px-4 font-Montserrat text-[17px] italic font-normal leading-[29px]">
  The pizza not only looks great, but has quality ingredients and is really good. The owner is very<br></br>
pleasant and helpful, and this is reflected in the staff. What I see a bit of a gap is advertising.<br></br>
If we didn’t walk by her and she didn’t interest us, we wouldn’t notice her.
  </p>
  <p className="lg:hidden block mb-[32px] text-[#000] lg:px-0 px-4 font-Montserrat text-[17px] italic font-normal leading-[29px]">
  The pizza not only looks great, but has quality ingredients and is really good. The owner is very
pleasant and helpful, and this is reflected in the staff. What I see a bit of a gap is advertising.
If we didn’t walk by her and she didn’t interest us, we wouldn’t notice her.
  </p>
</div>

</div>
<h1 className="text-[#121D27] text-center font-Bellefair text-[24px] font-normal leading-[26px] mb-2">
Local guide about Pizzaiolo
</h1>
<div className="flex flex-rpw space-x-2 mb-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M11.0441 0.927049C11.3434 0.0057385 12.6468 0.00573993 12.9462 0.927051L14.9138 6.98278C15.0477 7.3948 15.4316 7.67376 15.8649 7.67376H22.2322C23.201 7.67376 23.6037 8.91338 22.82 9.48278L17.6687 13.2254C17.3182 13.4801 17.1716 13.9314 17.3054 14.3435L19.2731 20.3992C19.5724 21.3205 18.5179 22.0866 17.7342 21.5172L12.5829 17.7746C12.2324 17.5199 11.7578 17.5199 11.4073 17.7746L6.25602 21.5172C5.47231 22.0866 4.41783 21.3205 4.71718 20.3992L6.6848 14.3435C6.81868 13.9314 6.67202 13.4801 6.32153 13.2254L1.17022 9.48278C0.386509 8.91338 0.789285 7.67376 1.75801 7.67376H8.12538C8.55861 7.67376 8.94256 7.3948 9.07644 6.98278L11.0441 0.927049Z" fill="#FFAA00"/>
</svg>

</div>
<h2 className="text-[#121D27] text-center font-Montserrat text-[13px] font-normal leading-[26px]">
  on google reviews.
</h2>

</div>
  </div>
</section>




<section className="lg:mb-[55px] mb-[35px] max-w-[1280px] flex justify-center items-center mx-auto px-4 lg:px-2">
<img src="/images/brave and creative 1.png" alt="BC" class="w-full h-full object-cover"></img>
</section>

</main>

      <Footer/>
    </div>
  );
}
