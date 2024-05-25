// BURGER MENU FUNCTION -- ორი ვარიანტი 1. მენუზე დაკლიკებისას იშლება მობილურის ნავიგაცია, ხოლო ბურგერ მენიუ ქრება როგორც დიზაინში.
// 2. ვარიანტი - ბურგერ მენიუზე დაკლიკებისას ირთვება პატარა ანიმაცია ბურგერ მენიუზე.

const burgerMenu = document.querySelector(".burger-menu");
const mobileNavigationwrapper = document.querySelector(
	".mobile-navigation-wrapper"
);
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");
const middleLine = document.querySelector(".middle-line");

// BURGER MENU OPEN WITHOUT ANIMATION

//  burgerMenu.addEventListener('click', function() {
//     mobileNavigationwrapper.classList.toggle('active');
//     burgerMenu.style.display = 'none';
// });

// BURGER MENU OPEN WITH ANIMATION

burgerMenu.addEventListener("click", function () {
	const isOpen = mobileNavigationwrapper.classList.toggle("active");
	if (isOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}

	topLine.classList.toggle("rotate-top-line", isOpen);
	middleLine.classList.toggle("rotate-middle-line", isOpen);
	bottomLine.classList.toggle("rotate-bottom-line", isOpen);

	topLine.classList.toggle("rotate-top-back", !isOpen);
	middleLine.classList.toggle("rotate-middle-back", !isOpen);
	bottomLine.classList.toggle("rotate-bottom-back", !isOpen);
});

// LANGUAGE CHANGE FOR DESKTOP


const selectLang = document.querySelector('.select-lang');
const langContainerEng = document.querySelector('.lang-container-eng')
const langContainerGeo = document.querySelector('.lang-container-geo')
const mobileLangContainerEng = document.querySelector('.mobile-lang-container-eng')
const mobileLangContainerGeo = document.querySelector('.mobile-lang-container-geo')

// Add click event listener to the container

   selectLang.addEventListener('click',function(){
	  langContainerEng.classList.toggle('change-lang')
	  langContainerGeo.classList.toggle('change-lang')
   })

// FOR MOBILE

const mobileSelectLang = document.querySelector('.mobile-select-lang')

mobileSelectLang.addEventListener('click',function(){
	mobileLangContainerEng.classList.toggle('change-lang')
	mobileLangContainerGeo.classList.toggle('change-lang')
 })



// CODE SNIPPET FOR RENDERING DATA FROM JAVASCRIPT

// RENDER INFO ABOUT US

//  const aboutUsText = document.querySelector('.about-us-text')

//  const aboutUs = [
//     {
//         text1:`საქართველოს 150 უმსხვილესი კერძო კომპანიის ჯამური შემოსავალი. წარმოგიდგენთ საქართველოს ყველაზე მაღალი შემოსავლის მქონე კერძო
//                კომპანიების რეიტინგს, რომელიც კომპანიების მიერ საჯაროდ
//                გამოქვეყნებული ფინანსური ანგარიშგებების საფუძველზე შედგა`,
//         text2: `უმსხვილესი კომპანიების რეიტინგისგან განსხვავებით, რომელშიც კომპანიები აქტივების ღირებულების, შემოსავლებისა და
//                 წმინდა მოგების საფუძველზე შემდგარი ინდექსის მიხედვით არიან დალაგებული, ყველაზე
//                 შემოსავლიანი კომპანიების სიაში რანჟირება მათი შემოსავლების მიხედვით არის გაკეთებული.`,
//         text3: `უმსხვილესი კომპანიების რეიტინგისგან განსხვავებით, რომელშიც კომპანიები აქტივების ღირებულების,
//                 შემოსავლებისა და წმინდა მოგების საფუძველზე შემდგარი ინდექსის მიხედვით არიან
//                 დალაგებული, ყველაზე შემოსავლიანი კომპანიების სიაში რანჟირება მათი შემოსავლების მიხედვით არის გაკეთებული.`
//     }
// ]

// aboutUs.map((text)=>{
//     if(aboutUsText){
//         aboutUsText.innerHTML += `
//         <p>${text.text1}</p>
//         <br>
//         <p>${text.text2}</p>
//         <br>
//         <p>${text.text3}</p>
//     `
//     }

// })

// RENDER TEXT CONTENT FOR MAIN PAGE

//    const aboutUsMainText = document.querySelector('.about-us-main-text')

//    aboutUs.map((text)=>{
//         if(aboutUsMainText){
//             aboutUsMainText.innerHTML += `
//             <p>${text.text1}</p>
//             <br>
//             <p>${text.text2}</p>
//             <button class="get-more">გაიგეთ მეტი</button>
//         `
//         }
//    })

// SERVICE SECTION

// const serviceWrapper = document.querySelector('.service-wrapper')

// DATA FOR SERVICE SECTION

// const services = [
//     {
//         image:"assets/images/services/service1.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service2.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service3.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service4.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service5.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service6.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service7.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service8.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
//     {
//         image:"assets/images/services/service9.png",
//         serviceTitle:"სერვისის დასახელება",
//         serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
//         // button: {
//         //     text: "გაეცანით",
//         //     // link
//         // }
//     },
// ]

// RENDERING SERVICE DATA

// services.map((item)=>{
//     if(serviceWrapper){
//         serviceWrapper.innerHTML += `

//         <div class="service-data">
//              <div class="service-image">
//                  <img src="${item.image}" alt="service"/>
//              </div>
//               <a class="service-navigate-link" href="aboutService.html"> <h5>${item.serviceTitle}</h5></a>
//                 <p>${item.serviceInfo}</p>
//             <button onclick="window.location.href='aboutService.html'"class="learn-more">გაეცანით</button>
//         </div>
//     `
//     }

// })

// RENDERING SERVER DATA FOR MAIN PAGE

//  const serviceDataMain = document.querySelector('.service-data-main')
//  const viewMoreService = document.querySelector('.view-more-service')

//  services.slice(0, 3).map((item) => {
//     if (serviceDataMain) {
//         serviceDataMain.innerHTML += `
//             <div class="main-service-info">
//                 <div class="service-image">
//                     <img src="${item.image}" alt="service"/>
//                 </div>
//                 <h5>${item.serviceTitle}</h5>
//                 <p>${item.serviceInfo}</p>
//                 <button class="view-more">გაეცანით</button>
//             </div>
//         `;
//     }

//     if (viewMoreService) {
//         viewMoreService.innerHTML += `
//             <div class="main-service-info">
//                 <div class="service-image">
//                     <img src="${item.image}" alt="service"/>
//                 </div>
//                 <h5>${item.serviceTitle}</h5>
//                 <p>${item.serviceInfo}</p>
//                 <button class="view">გაეცანით</button>
//             </div>
//         `;
//     }
// });
