import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-black text-white text-sm py-[14px] lg:px-[157px] px-4 flex space-y-2 lg:space-y-0  lg:flex-row flex-col justify-between items-center">
        <div className="flex lg:flex-row flex-col space-y-2 lg:space-y-0  items-center lg:space-x-[20px]">
          <div className="flex items-center space-x-1">
            <Image src="/icons/Symbol.svg" width={16} height={16} alt="Email" />
            <a href="mailto:info@by-bc.com" className="text-[14px] font-[400] text-[#FFFFFFF2]">info@by-bc.com</a>
            </div>
          <div className="hidden flex items-center space-x-1">
            <Image src="/icons/Symbol (1).svg" width={16} height={16} alt="Phone" />
            <a href="tel:+420736700880" className=" text-[14px] font-[400] text-[#FFFFFFF2]">+420 736 700 880</a>
            </div>
        </div>
        <div className="flex space-x-[20px]">
          <div className="flex flex-row space-x-1">     
            <Image src="/icons/Component 1 (1).svg" width={16} height={16} alt="Email" />      
            <a href="https://www.instagram.com/pizzaiolobybc?igsh=MXIzMHFyYTJnbDd0ag==" target="_blank" className="text-[14px] font-[400] text-[#FFFFFFF2]">Pizzaiolo</a>
            </div>
          <div className="flex flex-row space-x-1">     
          <Image src="/icons/Component 1 (1).svg" width={16} height={16} alt="Email" />
          <a href="https://www.instagram.com/mrburgerbybc?igsh=MXE1aGRrd2sydWNoeg==" target="_blank" className="text-[14px] font-[400] text-[#FFFFFFF2]">MrBurger</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-[12px] lg:px-[157px] px-4 flex justify-center lg:justify-between items-center">
        <div className="text-2xl font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="43" viewBox="0 0 83 43" fill="none">
  <path d="M29.4374 38.5833C27.5841 37.0001 26.6837 34.7459 26.6837 31.6844C26.6837 28.6228 27.448 27.3437 29.0081 25.6033C29.6364 24.9113 30.3588 24.2612 31.1651 23.6846C31.2174 23.6426 31.2802 23.6007 31.3431 23.5692C31.2593 23.4853 31.1755 23.412 31.0918 23.3386C29.3641 21.8288 27.1444 20.8851 24.7152 20.7698C24.5372 20.7698 24.3487 20.7593 24.1707 20.7593V20.644C24.8513 20.644 25.5109 20.5706 26.1601 20.4448C26.1601 20.4448 26.1811 20.4448 26.1915 20.4448C29.5631 19.7423 32.3064 17.3203 33.4686 14.133C33.8455 13.0845 34.055 11.9522 34.055 10.7569C34.055 8.49223 33.2906 6.3953 32.0027 4.72823C31.4582 4.01527 30.8091 3.3757 30.0866 2.8305C30.0238 2.77807 29.9609 2.73614 29.8877 2.6942C28.2752 1.54088 26.2962 0.859375 24.1707 0.859375H0.255859V41.9594H24.1707C26.2648 41.9594 28.2228 41.3513 29.8772 40.2923C29.8772 40.2923 29.8981 40.2923 29.9086 40.2818C30.0238 40.2084 30.1389 40.1246 30.2437 40.0512C30.4635 39.8939 30.6729 39.7366 30.8824 39.5584C30.6415 39.4326 30.4007 39.2963 30.1808 39.1495C29.9191 38.9712 29.6782 38.793 29.4584 38.6043L29.4374 38.5833ZM12.2552 7.85267H16.5167C19.5427 7.85267 21.2599 9.41489 21.2599 12.2038C21.2599 14.9927 19.5427 16.555 16.5167 16.555H12.2552V7.85267ZM17.0821 34.7459H12.3599V26.4001H17.0821C19.9929 26.4001 21.6368 27.8889 21.6368 30.573C21.6368 33.2571 19.9929 34.7459 17.0821 34.7459Z" fill="#141414"/>
  <path d="M69.8645 12.9276C72.6601 12.9276 75.1521 14.2906 76.6913 16.3981H82.7433V4.34066C82.7119 4.30921 82.67 4.28824 82.6281 4.25679C82.4397 4.12049 82.2512 3.98418 82.0627 3.84788C81.8324 3.69061 81.602 3.53334 81.3612 3.37607C81.1204 3.2188 80.8795 3.0825 80.6387 2.93571C80.3979 2.78893 80.1466 2.65263 79.8953 2.51633C79.644 2.38003 79.3927 2.25421 79.1414 2.12839C79.1309 2.12839 79.1205 2.11791 79.11 2.11791C78.8587 2.00258 78.6179 1.88725 78.3666 1.7824C78.1467 1.68804 77.9164 1.58319 77.686 1.49931C77.6546 1.48883 77.6127 1.46786 77.5708 1.45737C77.3509 1.36301 77.1311 1.27913 76.9007 1.20574C76.6704 1.12186 76.44 1.04847 76.1992 0.975077C76.0421 0.922653 75.8851 0.870229 75.7175 0.82829C75.016 0.629081 74.2935 0.461327 73.5606 0.325026C73.4035 0.293572 73.2674 0.272601 73.1104 0.251632C72.8591 0.209693 72.6078 0.178239 72.3565 0.146785C72.1261 0.115331 71.8958 0.0943619 71.6549 0.0733925C71.3618 0.0419385 71.0581 0.0209691 70.7649 0.0209691C70.4718 0.0104844 70.1681 0 69.8645 0C69.5608 0 69.3828 6.39779e-07 69.142 0.0104853C68.9535 0.0104853 68.7755 0.0209688 68.5871 0.0419381C63.0376 0.398418 57.8652 3.05105 54.1586 6.90941C54.1272 6.94087 54.0958 6.97232 54.0643 7.00378C53.0906 8.0837 52.2215 9.2475 51.4781 10.5057C51.9493 10.8517 52.41 11.2291 52.8602 11.659L53.8549 12.5921L52.9649 13.6301L49.6876 17.2683L49.0175 16.765C48.9442 17.0586 48.8919 17.3731 48.8395 17.6772C48.6406 18.7991 48.5359 19.9629 48.5254 21.1476V21.3783C48.5254 22.7937 48.6615 24.1777 48.9233 25.5197L49.007 25.6456C49.6562 24.9431 50.1797 24.0938 50.5776 23.1292L51.1116 21.8501L57.9385 24.7229L57.4149 26.002C57.1008 26.7779 56.6401 27.6377 56.0642 28.5498C55.1323 30.0282 54.3156 31.0557 53.5513 31.6952L60.6189 40.6596C63.0481 41.8234 65.7286 42.5574 68.5661 42.7251C68.6499 42.7251 68.7336 42.7356 68.8174 42.7356C69.1629 42.7566 69.5189 42.7671 69.8645 42.7671C74.7019 42.7671 79.1624 41.1524 82.7328 38.4369V26.4005H76.6808C75.1417 28.4974 72.6601 29.8709 69.854 29.8709C65.1841 29.8709 61.3938 26.0859 61.3938 21.4097C61.3938 16.7336 65.1841 12.9486 69.854 12.9486L69.8645 12.9276Z" fill="#141414"/>
  <path d="M51.6347 31.4866L52.6609 30.6164C53.2996 30.0817 54.043 29.1276 54.8911 27.796C55.4251 26.9467 55.8439 26.1709 56.1266 25.4579L51.8546 23.665C51.3939 24.7869 50.7762 25.762 50.0327 26.5903L49.3626 27.3242L48.8391 27.9008L44.054 20.7398C43.2897 19.5865 42.8918 18.4437 42.8918 17.3532C42.8918 16.2628 43.1954 15.5813 43.8027 14.9837C44.3996 14.3861 45.1849 14.0715 46.0853 14.0715C46.9858 14.0715 47.7711 14.3232 48.5983 14.8159C48.9124 15.0047 49.1742 15.1724 49.394 15.3297C49.4359 15.3612 49.4673 15.3821 49.5092 15.4136L51.9384 12.719C51.9384 12.719 51.9384 12.719 51.9279 12.7085C51.5615 12.373 51.1845 12.0585 50.8076 11.7754C50.0642 11.2092 49.3207 10.7584 48.5564 10.4229C47.0905 9.78329 45.3524 9.46875 43.4049 9.46875C41.4573 9.46875 40.4836 9.65748 39.3527 10.0349C38.2533 10.3914 37.4366 10.8213 36.8817 11.3141C36.3267 11.7964 35.866 12.373 35.51 13.044C35.0493 13.8933 34.8818 14.449 34.8294 14.774C34.7352 15.2878 34.6828 15.8015 34.6828 16.3048C34.6828 17.6049 35.2273 19.1566 36.2848 20.8866L37.1644 22.3125L35.5938 22.9101C34.3583 23.3715 33.2588 23.9481 32.2956 24.5982C32.1804 24.6716 32.0757 24.745 31.971 24.8183C31.238 25.3426 30.5888 25.9297 30.0234 26.5483C28.7041 28.0057 28.0654 29.6937 28.0654 31.6858C28.0654 33.6779 28.8088 36.2257 30.3375 37.5258C30.5155 37.6831 30.7145 37.8298 30.9344 37.9662C31.238 38.1758 31.5836 38.3541 31.9396 38.5114C33.4054 39.1929 35.3006 39.5284 37.5937 39.5284C40.8605 39.5284 43.5829 38.6791 45.9073 36.9387L47.0067 36.1104L49.1009 38.8993H57.4669L57.247 38.6267L51.6243 31.4971L51.6347 31.4866ZM43.164 33.2585C42.0856 34.3384 40.8081 34.8837 39.3632 34.8837C37.9183 34.8837 37.1434 34.5167 36.2744 33.7828C35.3216 33.0069 34.819 31.927 34.819 30.6583C34.819 29.3897 35.1436 28.7187 35.7927 27.8904C36.4419 27.0621 37.3738 26.4959 38.557 26.2338L39.4574 26.0346L44.0017 32.4198L43.1745 33.248L43.164 33.2585Z" fill="#141414"/>
</svg>
        </div>
        <nav>
          <ul className="lg:block hidden flex text-[#141414]">
            <li className="text-[18px] font-[600] leading-[35px]">HOME</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
