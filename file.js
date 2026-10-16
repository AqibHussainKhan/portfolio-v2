let darkMode = false;
                    
const body = document.getElementById("body");
const sun = document.getElementById("sunIcon");
const moon = document.getElementById("moonIcon");
const btn = document.getElementById("themeBtn");

btn.onclick = function () {

    if (!darkMode) {

        // Sun Rotate
        sun.classList.add("rotate-[90deg]");

        setTimeout(() => {
            sun.classList.add("hidden");
            moon.classList.remove("hidden");
        }, 500);

        body.classList.remove("bg-white");
        body.classList.add("bg-black");

        darkMode = true;

        // name
        document.getElementById("name").classList.remove("text-black");
        document.getElementById("name").classList.add("text-white");

        // aboutmebtn
        document.getElementById("about-btn").classList.remove("text-black");
        document.getElementById("about-btn").classList.add("text-white");

        // projectsbtn
        document.getElementById("projects-btn").classList.remove("text-black");
        document.getElementById("projects-btn").classList.add("text-white");

        // servicesbtn
        document.getElementById("services-btn").classList.remove("text-black");
        document.getElementById("services-btn").classList.add("text-white");

        // hire btn
        document.getElementById("hire-btn").classList.remove("text-black");
        document.getElementById("hire-btn").classList.add("text-white");

        // box-background
        document.getElementById("line-1box2").classList.remove("bg-gradient-to-r", "from-yellow-200", "via-amber-50", "to-orange-100");
        document.getElementById("line-1box2").classList.add("bg-gradient-to-r", "from-[#6B3F14]", "via-[#754515]", "to-[#8A541F]");

        // box text
        document.getElementById("line1box2text1").classList.remove("text-black");
        document.getElementById("line1box2text1").classList.add("text-white");

        document.getElementById("line1box2text2").classList.remove("text-zinc-900");
        document.getElementById("line1box2text2").classList.add("text-white");

        // Projects box background
        // box-1
        document.getElementById("box-bg1").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg1").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-1-h1").classList.remove("text-zinc-950");
        document.getElementById("box-1-h1").classList.add("text-zinc-50");

        document.getElementById("box-1-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-1-arrow").classList.add("text-zinc-50");

        document.getElementById("box-1-spn").classList.remove("text-zinc-600");
        document.getElementById("box-1-spn").classList.add("text-zinc-400");

        // box-2
        document.getElementById("box-bg2").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg2").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-2-h1").classList.remove("text-zinc-950");
        document.getElementById("box-2-h1").classList.add("text-zinc-50");

        document.getElementById("box-2-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-2-arrow").classList.add("text-zinc-50");

        document.getElementById("box-2-spn").classList.remove("text-zinc-600");
        document.getElementById("box-2-spn").classList.add("text-zinc-400");

        // box-3
        document.getElementById("box-bg3").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg3").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-3-h1").classList.remove("text-zinc-950");
        document.getElementById("box-3-h1").classList.add("text-zinc-50");

        document.getElementById("box-3-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-3-arrow").classList.add("text-zinc-50");

        document.getElementById("box-3-spn").classList.remove("text-zinc-600");
        document.getElementById("box-3-spn").classList.add("text-zinc-400");

        // box-4
        document.getElementById("box-bg4").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg4").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-4-h1").classList.remove("text-zinc-950");
        document.getElementById("box-4-h1").classList.add("text-zinc-50");

        document.getElementById("box-4-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-4-arrow").classList.add("text-zinc-50");

        document.getElementById("box-4-spn").classList.remove("text-zinc-600");
        document.getElementById("box-4-spn").classList.add("text-zinc-400");

        // box-5
        document.getElementById("box-bg5").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg5").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-5-h1").classList.remove("text-zinc-950");
        document.getElementById("box-5-h1").classList.add("text-zinc-50");

        document.getElementById("box-5-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-5-arrow").classList.add("text-zinc-50");

        document.getElementById("box-5-spn").classList.remove("text-zinc-600");
        document.getElementById("box-5-spn").classList.add("text-zinc-400");

        // box-6
        document.getElementById("box-bg6").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg6").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-6-h1").classList.remove("text-zinc-950");
        document.getElementById("box-6-h1").classList.add("text-zinc-50");

        document.getElementById("box-6-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-6-arrow").classList.add("text-zinc-50");

        document.getElementById("box-6-spn").classList.remove("text-zinc-600");
        document.getElementById("box-6-spn").classList.add("text-zinc-400");

        // box-7
        document.getElementById("box-bg7").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg7").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-7-h1").classList.remove("text-zinc-950");
        document.getElementById("box-7-h1").classList.add("text-zinc-50");

        document.getElementById("box-7-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-7-arrow").classList.add("text-zinc-50");

        document.getElementById("box-7-spn").classList.remove("text-zinc-600");
        document.getElementById("box-7-spn").classList.add("text-zinc-400");

        // box-8
        document.getElementById("box-bg8").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg8").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-8-h1").classList.remove("text-zinc-950");
        document.getElementById("box-8-h1").classList.add("text-zinc-50");

        document.getElementById("box-8-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-8-arrow").classList.add("text-zinc-50");

        document.getElementById("box-8-spn").classList.remove("text-zinc-600");
        document.getElementById("box-8-spn").classList.add("text-zinc-400");

        // box-9
        document.getElementById("box-bg9").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg9").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-9-h1").classList.remove("text-zinc-950");
        document.getElementById("box-9-h1").classList.add("text-zinc-50");

        document.getElementById("box-9-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-9-arrow").classList.add("text-zinc-50");

        document.getElementById("box-9-spn").classList.remove("text-zinc-600");
        document.getElementById("box-9-spn").classList.add("text-zinc-400");

        // box-10
        document.getElementById("box-bg10").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg10").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-10-h1").classList.remove("text-zinc-950");
        document.getElementById("box-10-h1").classList.add("text-zinc-50");

        document.getElementById("box-10-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-10-arrow").classList.add("text-zinc-50");

        document.getElementById("box-10-spn").classList.remove("text-zinc-600");
        document.getElementById("box-10-spn").classList.add("text-zinc-400");

        // box-11
        document.getElementById("box-bg11").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg11").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-11-h1").classList.remove("text-zinc-950");
        document.getElementById("box-11-h1").classList.add("text-zinc-50");

        document.getElementById("box-11-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-11-arrow").classList.add("text-zinc-50");

        document.getElementById("box-11-spn").classList.remove("text-zinc-600");
        document.getElementById("box-11-spn").classList.add("text-zinc-400");

        // box-12
        document.getElementById("box-bg12").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg12").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-12-h1").classList.remove("text-zinc-950");
        document.getElementById("box-12-h1").classList.add("text-zinc-50");

        document.getElementById("box-12-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-12-arrow").classList.add("text-zinc-50");

        document.getElementById("box-12-spn").classList.remove("text-zinc-600");
        document.getElementById("box-12-spn").classList.add("text-zinc-400");

        // box-13
        document.getElementById("box-bg13").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg13").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-13-h1").classList.remove("text-zinc-950");
        document.getElementById("box-13-h1").classList.add("text-zinc-50");

        document.getElementById("box-13-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-13-arrow").classList.add("text-zinc-50");

        document.getElementById("box-13-spn").classList.remove("text-zinc-600");
        document.getElementById("box-13-spn").classList.add("text-zinc-400");

        // box-14
        document.getElementById("box-bg14").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg14").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-14-h1").classList.remove("text-zinc-950");
        document.getElementById("box-14-h1").classList.add("text-zinc-50");

        document.getElementById("box-14-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-14-arrow").classList.add("text-zinc-50");

        document.getElementById("box-14-spn").classList.remove("text-zinc-600");
        document.getElementById("box-14-spn").classList.add("text-zinc-400");

        // box-15
        document.getElementById("box-bg15").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg15").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-15-h1").classList.remove("text-zinc-950");
        document.getElementById("box-15-h1").classList.add("text-zinc-50");

        document.getElementById("box-15-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-15-arrow").classList.add("text-zinc-50");

        document.getElementById("box-15-spn").classList.remove("text-zinc-600");
        document.getElementById("box-15-spn").classList.add("text-zinc-400");

        // box-16
        document.getElementById("box-bg16").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg16").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-16-h1").classList.remove("text-zinc-950");
        document.getElementById("box-16-h1").classList.add("text-zinc-50");

        document.getElementById("box-16-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-16-arrow").classList.add("text-zinc-50");

        document.getElementById("box-16-spn").classList.remove("text-zinc-600");
        document.getElementById("box-16-spn").classList.add("text-zinc-400");

        // box-17
        document.getElementById("box-bg17").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg17").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-17-h1").classList.remove("text-zinc-950");
        document.getElementById("box-17-h1").classList.add("text-zinc-50");

        document.getElementById("box-17-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-17-arrow").classList.add("text-zinc-50");

        document.getElementById("box-17-spn").classList.remove("text-zinc-600");
        document.getElementById("box-17-spn").classList.add("text-zinc-400");

        // box-18
        document.getElementById("box-bg18").classList.remove("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");
        document.getElementById("box-bg18").classList.add("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");

        document.getElementById("box-18-h1").classList.remove("text-zinc-950");
        document.getElementById("box-18-h1").classList.add("text-zinc-50");

        document.getElementById("box-18-arrow").classList.remove("text-zinc-950");
        document.getElementById("box-18-arrow").classList.add("text-zinc-50");

        document.getElementById("box-18-spn").classList.remove("text-zinc-600");
        document.getElementById("box-18-spn").classList.add("text-zinc-400");

        // services
        document.getElementById("services").classList.remove("bg-purple-100/50");
        document.getElementById("services").classList.add("bg-purple-900/75");

        // servic-h2
        document.getElementById("servic-h2").classList.remove("text-zinc-950");
        document.getElementById("servic-h2").classList.add("text-zinc-100");

        // servic-center-line
        document.getElementById("servic-center-line").classList.remove("bg-zinc-900");
        document.getElementById("servic-center-line").classList.add("bg-zinc-100");

        // servic-box-1
        document.getElementById("servic-box-1").classList.remove("bg-zinc-900", "hover:bg-zinc-950");
        document.getElementById("servic-box-1").classList.add("bg-purple-900/75");

        // servic-box-2
        document.getElementById("servic-box-2").classList.remove("bg-zinc-900", "hover:bg-zinc-950");
        document.getElementById("servic-box-2").classList.add("bg-purple-900/75");

        // servic-box-3
        document.getElementById("servic-box-3").classList.remove("bg-zinc-900", "hover:bg-zinc-950");
        document.getElementById("servic-box-3").classList.add("bg-purple-900/75");

        // servic-box-4
        document.getElementById("servic-box-4").classList.remove("bg-zinc-900", "hover:bg-zinc-950");
        document.getElementById("servic-box-4").classList.add("bg-purple-900/75");

        // servic-box-5
        document.getElementById("servic-box-5").classList.remove("bg-zinc-900", "hover:bg-zinc-950");
        document.getElementById("servic-box-5").classList.add("bg-purple-900/75");

        // servic-box-6
        document.getElementById("servic-box-6").classList.remove("bg-zinc-900", "hover:bg-zinc-950");
        document.getElementById("servic-box-6").classList.add("bg-purple-900/75");

        // form
        document.getElementById("form").classList.remove("bg-purple-100/50");
        document.getElementById("form").classList.add("bg-purple-900/75");

        // form-h1
        document.getElementById("form-h1").classList.remove("text-black");
        document.getElementById("form-h1").classList.add("text-white");

        // form-p
        document.getElementById("form-p").classList.remove("text-zinc-900");
        document.getElementById("form-p").classList.add("text-zinc-200");

        // form-name
        document.getElementById("form-name").classList.remove("text-zinc-950");
        document.getElementById("form-name").classList.add("text-zinc-200");

        // form-email
        document.getElementById("form-email").classList.remove("text-zinc-950");
        document.getElementById("form-email").classList.add("text-zinc-200");

        // form-message
        document.getElementById("form-message").classList.remove("text-zinc-950");
        document.getElementById("form-message").classList.add("text-zinc-200");

        // form-name-input
        document.getElementById("form-name-input").classList.remove("border-white", "bg-white", "placeholder-zinc-500", "focus:border-purple-500");
        document.getElementById("form-name-input").classList.add("border-purple-950", "bg-purple-950", "placeholder-zinc-400", "focus:border-purple-500");

        // form-email-input
        document.getElementById("form-email-input").classList.remove("border-white", "bg-white", "placeholder-zinc-500", "focus:border-purple-500");
        document.getElementById("form-email-input").classList.add("border-purple-950", "bg-purple-950", "placeholder-zinc-400", "focus:border-purple-500");

        // form-message-textarea
        document.getElementById("form-message-textarea").classList.remove("border-white", "bg-white", "placeholder-zinc-500", "focus:border-purple-500");
        document.getElementById("form-message-textarea").classList.add("border-purple-950", "bg-purple-950", "placeholder-zinc-400", "focus:border-purple-500");
        

    } else {

        moon.classList.add("hidden");
        sun.classList.remove("hidden");

        sun.classList.remove("rotate-[360deg]");
        void sun.offsetWidth; // Restart animation
        sun.classList.add("rotate-[360deg]");

        body.classList.remove("bg-black");
        body.classList.add("bg-white");

            darkMode = false;

        // name
        document.getElementById("name").classList.remove("text-white");
        document.getElementById("name").classList.add("text-black");

        // aboutmebtn
        document.getElementById("about-btn").classList.remove("text-white");
        document.getElementById("about-btn").classList.add("text-black");

        // projectsbtn
        document.getElementById("projects-btn").classList.remove("text-white");
        document.getElementById("projects-btn").classList.add("text-black");

        // servicesbtn
        document.getElementById("services-btn").classList.remove("text-white");
        document.getElementById("services-btn").classList.add("text-black");

        // hire btn
        document.getElementById("hire-btn").classList.remove("text-white");
        document.getElementById("hire-btn").classList.add("text-black");

        // box-background
        document.getElementById("line-1box2").classList.remove("bg-gradient-to-r", "from-[#6B3F14]", "via-[#754515]", "to-[#8A541F]");
        document.getElementById("line-1box2").classList.add("bg-gradient-to-r", "from-yellow-200", "via-amber-50", "to-orange-100");
        
        // text box
        document.getElementById("line1box2text1").classList.remove("text-white");
        document.getElementById("line1box2text1").classList.add("text-black");

        document.getElementById("line1box2text2").classList.remove("text-white");
        document.getElementById("line1box2text2").classList.add("text-zinc-900");

        // Projects box background
        // box-1
        document.getElementById("box-bg1").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg1").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-1-h1").classList.remove("text-zinc-50");
        document.getElementById("box-1-h1").classList.add("text-zinc-950");

        document.getElementById("box-1-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-1-arrow").classList.add("text-zinc-950")

        document.getElementById("box-1-spn").classList.remove("text-zinc-400");
        document.getElementById("box-1-spn").classList.add("text-zinc-600");

        // box-2
        document.getElementById("box-bg2").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg2").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-2-h1").classList.remove("text-zinc-50");
        document.getElementById("box-2-h1").classList.add("text-zinc-950");

        document.getElementById("box-2-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-2-arrow").classList.add("text-zinc-950")

        document.getElementById("box-2-spn").classList.remove("text-zinc-400");
        document.getElementById("box-2-spn").classList.add("text-zinc-600");

        // box-3
        document.getElementById("box-bg3").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg3").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-3-h1").classList.remove("text-zinc-50");
        document.getElementById("box-3-h1").classList.add("text-zinc-950");

        document.getElementById("box-3-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-3-arrow").classList.add("text-zinc-950")

        document.getElementById("box-3-spn").classList.remove("text-zinc-400");
        document.getElementById("box-3-spn").classList.add("text-zinc-600");

        // box-4
        document.getElementById("box-bg4").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg4").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-4-h1").classList.remove("text-zinc-50");
        document.getElementById("box-4-h1").classList.add("text-zinc-950");

        document.getElementById("box-4-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-4-arrow").classList.add("text-zinc-950")

        document.getElementById("box-4-spn").classList.remove("text-zinc-400");
        document.getElementById("box-4-spn").classList.add("text-zinc-600");

        // box-5
        document.getElementById("box-bg5").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg5").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-5-h1").classList.remove("text-zinc-50");
        document.getElementById("box-5-h1").classList.add("text-zinc-950");

        document.getElementById("box-5-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-5-arrow").classList.add("text-zinc-950")

        document.getElementById("box-5-spn").classList.remove("text-zinc-400");
        document.getElementById("box-5-spn").classList.add("text-zinc-600");

        // box-6
        document.getElementById("box-bg6").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg6").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-6-h1").classList.remove("text-zinc-50");
        document.getElementById("box-6-h1").classList.add("text-zinc-950");

        document.getElementById("box-6-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-6-arrow").classList.add("text-zinc-950")

        document.getElementById("box-6-spn").classList.remove("text-zinc-400");
        document.getElementById("box-6-spn").classList.add("text-zinc-600");

        // box-7
        document.getElementById("box-bg7").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg7").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-7-h1").classList.remove("text-zinc-50");
        document.getElementById("box-7-h1").classList.add("text-zinc-950");

        document.getElementById("box-7-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-7-arrow").classList.add("text-zinc-950")

        document.getElementById("box-7-spn").classList.remove("text-zinc-400");
        document.getElementById("box-7-spn").classList.add("text-zinc-600");

        // box-8
        document.getElementById("box-bg8").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg8").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-8-h1").classList.remove("text-zinc-50");
        document.getElementById("box-8-h1").classList.add("text-zinc-950");

        document.getElementById("box-8-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-8-arrow").classList.add("text-zinc-950")

        document.getElementById("box-8-spn").classList.remove("text-zinc-400");
        document.getElementById("box-8-spn").classList.add("text-zinc-600");

        // box-9
        document.getElementById("box-bg9").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg9").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-9-h1").classList.remove("text-zinc-50");
        document.getElementById("box-9-h1").classList.add("text-zinc-950");

        document.getElementById("box-9-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-9-arrow").classList.add("text-zinc-950")

        document.getElementById("box-9-spn").classList.remove("text-zinc-400");
        document.getElementById("box-9-spn").classList.add("text-zinc-600");

        // box-10
        document.getElementById("box-bg10").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg10").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-10-h1").classList.remove("text-zinc-50");
        document.getElementById("box-10-h1").classList.add("text-zinc-950");

        document.getElementById("box-10-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-10-arrow").classList.add("text-zinc-950")

        document.getElementById("box-10-spn").classList.remove("text-zinc-400");
        document.getElementById("box-10-spn").classList.add("text-zinc-600");

        // box-11
        document.getElementById("box-bg11").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg11").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-11-h1").classList.remove("text-zinc-50");
        document.getElementById("box-11-h1").classList.add("text-zinc-950");

        document.getElementById("box-11-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-11-arrow").classList.add("text-zinc-950")

        document.getElementById("box-11-spn").classList.remove("text-zinc-400");
        document.getElementById("box-11-spn").classList.add("text-zinc-600");

        // box-12
        document.getElementById("box-bg12").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg12").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-12-h1").classList.remove("text-zinc-50");
        document.getElementById("box-12-h1").classList.add("text-zinc-950");

        document.getElementById("box-12-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-12-arrow").classList.add("text-zinc-950")

        document.getElementById("box-12-spn").classList.remove("text-zinc-400");
        document.getElementById("box-12-spn").classList.add("text-zinc-600");

        // box-13
        document.getElementById("box-bg13").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg13").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-13-h1").classList.remove("text-zinc-50");
        document.getElementById("box-13-h1").classList.add("text-zinc-950");

        document.getElementById("box-13-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-13-arrow").classList.add("text-zinc-950")

        document.getElementById("box-13-spn").classList.remove("text-zinc-400");
        document.getElementById("box-13-spn").classList.add("text-zinc-600");

        // box-14
        document.getElementById("box-bg14").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg14").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-14-h1").classList.remove("text-zinc-50");
        document.getElementById("box-14-h1").classList.add("text-zinc-950");

        document.getElementById("box-14-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-14-arrow").classList.add("text-zinc-950")

        document.getElementById("box-14-spn").classList.remove("text-zinc-400");
        document.getElementById("box-14-spn").classList.add("text-zinc-600");

        // box-15
        document.getElementById("box-bg15").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg15").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-15-h1").classList.remove("text-zinc-50");
        document.getElementById("box-15-h1").classList.add("text-zinc-950");

        document.getElementById("box-15-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-15-arrow").classList.add("text-zinc-950")

        document.getElementById("box-15-spn").classList.remove("text-zinc-400");
        document.getElementById("box-15-spn").classList.add("text-zinc-600");

        // box-16
        document.getElementById("box-bg16").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg16").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-16-h1").classList.remove("text-zinc-50");
        document.getElementById("box-16-h1").classList.add("text-zinc-950");

        document.getElementById("box-16-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-16-arrow").classList.add("text-zinc-950")

        document.getElementById("box-16-spn").classList.remove("text-zinc-400");
        document.getElementById("box-16-spn").classList.add("text-zinc-600");

        // box-17
        document.getElementById("box-bg17").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg17").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-17-h1").classList.remove("text-zinc-50");
        document.getElementById("box-17-h1").classList.add("text-zinc-950");

        document.getElementById("box-17-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-17-arrow").classList.add("text-zinc-950")

        document.getElementById("box-17-spn").classList.remove("text-zinc-400");
        document.getElementById("box-17-spn").classList.add("text-zinc-600");

        // box-18
        document.getElementById("box-bg18").classList.remove("bg-zinc-900", "hover:bg-zinc-800/75", "active:bg-zinc-800", "hover:shadow-[0_0_25px_#6B3F14]");
        document.getElementById("box-bg18").classList.add("bg-zinc-100", "hover:bg-zinc-200/75", "active:bg-zinc-200", "hover:shadow-[0_0_25px_#FFFF00]");

        document.getElementById("box-18-h1").classList.remove("text-zinc-50");
        document.getElementById("box-18-h1").classList.add("text-zinc-950");

        document.getElementById("box-18-arrow").classList.remove("text-zinc-50");
        document.getElementById("box-18-arrow").classList.add("text-zinc-950")

        document.getElementById("box-18-spn").classList.remove("text-zinc-400");
        document.getElementById("box-18-spn").classList.add("text-zinc-600");

        // services
        document.getElementById("services").classList.remove("bg-purple-900/75");
        document.getElementById("services").classList.add("bg-purple-100/50");

        // servic-h2
        document.getElementById("servic-h2").classList.remove("text-zinc-100");
        document.getElementById("servic-h2").classList.add("text-zinc-950");

        // servic-center-line
        document.getElementById("servic-center-line").classList.remove("bg-zinc-100");
        document.getElementById("servic-center-line").classList.add("bg-zinc-900");

        // servic-box-1
        document.getElementById("servic-box-1").classList.remove("bg-purple-900/75");
        document.getElementById("servic-box-1").classList.add("bg-zinc-900", "hover:bg-zinc-950");

        // servic-box-2
        document.getElementById("servic-box-2").classList.remove("bg-purple-900/75");
        document.getElementById("servic-box-2").classList.add("bg-zinc-900", "hover:bg-zinc-950");

        // servic-box-3
        document.getElementById("servic-box-3").classList.remove("bg-purple-900/75");
        document.getElementById("servic-box-3").classList.add("bg-zinc-900", "hover:bg-zinc-950");

        // servic-box-4
        document.getElementById("servic-box-4").classList.remove("bg-purple-900/75");
        document.getElementById("servic-box-4").classList.add("bg-zinc-900", "hover:bg-zinc-950");

        // servic-box-5
        document.getElementById("servic-box-5").classList.remove("bg-purple-900/75");
        document.getElementById("servic-box-5").classList.add("bg-zinc-900", "hover:bg-zinc-950");

        // servic-box-6
        document.getElementById("servic-box-6").classList.remove("bg-purple-900/75");
        document.getElementById("servic-box-6").classList.add("bg-zinc-900", "hover:bg-zinc-950");

        // form
        document.getElementById("form").classList.remove("bg-purple-900/75");
        document.getElementById("form").classList.add("bg-purple-100/50");

        // form-h1
        document.getElementById("form-h1").classList.remove("text-white");
        document.getElementById("form-h1").classList.add("text-black");

        // form-p
        document.getElementById("form-p").classList.remove("text-zinc-200");
        document.getElementById("form-p").classList.add("text-zinc-900");

        // form-name
        document.getElementById("form-name").classList.remove("text-zinc-200");
        document.getElementById("form-name").classList.add("text-zinc-950");

        // form-email
        document.getElementById("form-email").classList.remove("text-zinc-200");
        document.getElementById("form-email").classList.add("text-zinc-950");

        // form-message
        document.getElementById("form-message").classList.remove("text-zinc-200");
        document.getElementById("form-message").classList.add("text-zinc-950");

        // form-name-input
        document.getElementById("form-name-input").classList.remove("border-purple-950", "bg-purple-950", "placeholder-zinc-400", "focus:border-purple-500");
        document.getElementById("form-name-input").classList.add("border-white", "bg-white", "placeholder-zinc-500", "focus:border-purple-500");

        // form-email-input
        document.getElementById("form-email-input").classList.remove("border-purple-950", "bg-purple-950", "placeholder-zinc-400", "focus:border-purple-500");
        document.getElementById("form-email-input").classList.add("border-white", "bg-white", "placeholder-zinc-500", "focus:border-purple-500");

        // form-message-textarea
        document.getElementById("form-message-textarea").classList.remove("border-purple-950", "bg-purple-950", "placeholder-zinc-400", "focus:border-purple-500");
        document.getElementById("form-message-textarea").classList.add("border-white", "bg-white", "placeholder-zinc-500", "focus:border-purple-500");
  
    }

}