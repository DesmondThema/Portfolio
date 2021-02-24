<template>
   <div>
      <div class="font-sans text-gray-800 leading-normal min-h-screen">
         <header class="border-t-20 border-green">
            <div class="cv-container bg-green flex flex-row space-x-12 mx-auto items-center pt-6 px-20">
               <div class="">
                  <img src="../../static/image.png" class="w-36 h-36 rounded-full mb-4" alt="">
               </div>
               <div class="text-white">
                  <h1 class="text-xl">Kgothatso Desmond Thema</h1>
                  <p>Software Engineer</p>
               </div>
            </div>
         </header>
         <div class="container flex flex-row justify-between">
            <div class="left-pane flex-auto">
               <div class="contact-information">
                  <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Contact Information</h1>
                  <ul>
                  <div class="flex flex-row">
                     <li class="rounded-full h-8 w-8 flex items-center justify-center bg-green text-white mb-4">
                     <font-awesome :icon="['fas', 'phone']"/>
                     </li>
                  <p class="px-4 mt-1">083 795 2969</p>
                  </div>
                  <div class="flex flex-row">
                     <li class="rounded-full h-8 w-8 flex items-center justify-center bg-green text-white mb-4">
                     <font-awesome :icon="['fas', 'envelope']"/>
                  </li>
                 <p class="px-4 mt-1">desthedev@gmail.com</p>
                  </div>
                  <div class="flex flex-row">
                  <li class="rounded-full h-8 w-8 flex items-center justify-center bg-green text-white mb-4">
                     <font-awesome :icon="['fas', 'home']"/>
                  </li>
                  <p class="px-4 mt-1">Cape Town, South Africa</p>
                  </div>
                  <div class="flex flex-row">
                  <li class="rounded-full h-8 w-8 flex items-center justify-center bg-green text-white mb-4">
                     <font-awesome :icon="['fab', 'linkedin']"/>
                  </li>
                  <p class="px-4 mt-1">DesmondThema</p>
                  </div>
                  <p class="border-b-2 mr-8 border-green"></p>
               </ul>

               </div>
               <div class="education">
                  <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Education</h1>
                  <h2 class="uppercase">Honours Degree</h2>
                  <p> Computer Science</p>
                  <p class="mb-6">2016 - 2017</p>
                  <h2 class="uppercase">Bachelor of Science</h2>
                  <p>Mathematical Science</p>
                  <p class="mb-6">2013 - 2015</p>
                  <p class="border-b-2 mr-8 border-green"></p>


               </div>
               <div class="tech-skills">
                  <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Tech Skills</h1>
                  <p>Strong knowledge of web design, usability and functionality</p>
                  <p>Strong knowledge of HTML, CSS, and Javascript</p>
                  <p>Strong knowledge of PHP7+</p>
                  <p>Great knowledge of designing and building API's</p>
                  <p>Experience with ReactJs and VueJs</p>
                  <p>Experience with building Accelerated Mobile Pages</p>
                  <p>Fair knowledge of Linux systems and bash</p>
                  <p>Thorough understanding of Test Driven Development</p>
                  <p>Fair knowledge of kubernates and docker</p>
                  <p>Solid experience in issue tracking systems - JIRA, jamboard etc</p>  
               </div>
               <div class="soft-skills">
                  <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Soft Skills</h1>
                  <p>Great English communication skills to collaborate with team members</p>
                  <p>Open-mindedness and adaptability</p>
                  <p>Critical thinking, creativity, and problem-solving</p>
                  <p>Accountability, humility, and humbleness</p>
               </div>
               <div class="interests mb-8">
                  <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Interests</h1>
                  <ul class="flex flex-row items-center space-x-8">
                     <li><font-awesome :icon="['fas', 'music']"/></li>
                     <li><font-awesome :icon="['fas', 'guitar']"/></li>
                     <li><font-awesome :icon="['fas', 'gamepad']"/></li>
                     <li><font-awesome :icon="['fas', 'video']"/></li>
                     <li><font-awesome :icon="['fas', 'camera']"/></li>
                      
                  </ul>
               </div>
            </div>
            <div class="mt-6 vertical-border border-l-2 mr-28 border-green"></div>
            <div class="right-pane w-1/2">
               <div class="profile-container">
                  <div class="profile">
                     <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Professional Profile</h1>
                  <p class="mb-6">My primary interest is in web development, both front end and back end. The industry is fast paced and constantly moving forward. It is one that requires constant education throughout your entire career. This is exciting to me as there will always be new things to learn and new challenges to overcome. I primarily specialize on the LEMP (PHP) stack, with emphasis on the Laravel PHP framework and the ecosystem that surrounds it.
                </p>
                <p class="border-b-2 border-green"></p>
                <div class="experience">
                   <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Career Experience</h1>
                   <h2 class="uppercase">Software Engineer</h2>
                   <h3 class="mb-4">Superbalist.com / Cape Town / Oct 2018 - Current</h3>
                   <h3>Responsibilities : </h3>
                   <ul class="mb-6">
                      <li>Write code, tests and push to production independently</li>
                      <li>Review peers code and provide valuable feedback for the team</li>
                      <li>Create and execute unit test plans</li>
                      <li>Develop detailed technical analysis and design specifications based on functional requirements</li>
                      <li>Investigate and fix bugs</li>
                      <li>Participate in functional and technicak specification reviews</li>
                      <li>Monitor services and systems within our infrastructure</li>
                      <li>Work effectively accross multiple teams to deliver large projects</li>
                   </ul>
                </div>
                <div class="experience">
                   <h2 class="uppercase">Software Engineer</h2>
                   <h3 class="mb-4">Spree.co.za / Cape Town / JAN 2017 - SEP 2018</h3>
                   <h3>Responsibilities : </h3>
                   <ul class="mb-6">
                      <li>Working with an agile team to develop, test, and maintain web based applications.</li>
                      <li>Design, develop, and unit test applications in accordsnce with established standards.</li>
                      <li>Participate in peer reviews of solution design and related code.</li>
                      <li>Package and support deployment of releases</li>
                      <li>Develop, refine and tuning intergrations between applications</li>
                      <li>Analyzing and resolving technical applications</li>
                   </ul>
                </div>
               </div>
               </div>
                <div class="references">
                   <h1 class="text-green text-lg font-bold uppercase mb-6 mt-6">Refferences</h1>
                   <div class="flex flex-row space-x-44">
                      <div class="reference">
                      <p>Johan Welgemoed</p>
                      <p>Development Manager</p>
                      <p>Spree.co.za</p>
                      <p>076 612 5275</p>
                     </div>
                     <div class="reference-two">
                      <p>Johnmark Massey</p>
                      <p>Team Lead</p>
                      <p>Superbalist.com</p>
                      <p>john-mark.m@Superbalist.com</p>
                   </div>
                   </div>
                </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
     metaInfo: {
       title: 'Resume'
     }
   }
</script>
<style src="../main.css" />