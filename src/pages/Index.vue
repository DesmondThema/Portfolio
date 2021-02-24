<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div>Full Stack Laravel & Vuejs Hero</div>
        <div class="text-green">Welcome to my website</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="../../static/programmer.svg" alt="" class="w-72 mx-auto sm:mx-0">  
      </div>
    </div> <!-- End Hero -->

    <div class="container-inner mx-auto">
      <p class="text-xl">Greetings! I am Desmond. I spend my days designing and developing web applications, and blogging about new trends in the industry. I specialize in the Laravel PHP framework on the backend, Vue.js on the frontend and Tailwind CSS for styling. I also have a strong interest in Python programming language.</p>

      <div class="flex justify-between items-center py-16">
        <div class="w-72">
          <img src="../../static/laravel_vue.svg" alt="">
        </div>
        <div class="w-72 flex justify-end">
          <img src="../../static/code_review.svg" alt="">
        </div>
      </div>
    </div>
    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
      <h2 class="font-bold mb-16">Here are some projects I have worked on:</h2>
      <div class="absolute right-0" style="top: 50px; transform:translate(100%) rotate(180deg)">
        <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
      </div>
      <ul>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li class="checkmark mb-6">Project one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul> 
    </div> <!-- End Projects -->

    </div>
    

    <div class="get-to-know-me container-inner mx-auto text-xl border-gray-500 border-b pb-16 mb-16"> 
      <h2 class="font-bold mb-6"></h2>
      <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
        <div>
          <img src="../../static/image.png" class="w-32 h-32 rounded-full mb-8 lg:mb-0" alt="">
        </div>
        <div class="flex-1 text-xl ml-6">
            I am a Software Developer motivated to make a difference every day by building top notch software products using modern programming languages which includes PHP Laravel Framework, VueJs, and Python. 
        </div>
      </div>
    </div>
    <div class="contact-me container-inner mx-auto text-xl pb-4 mb-4">
      <h2 class="font-bold mb-6">Contact me:</h2>

      <div class="text-xl mb-16">
        If you’re looking to get in contact with me for business inquiries or if you have a question, feel free to email me. I’ll try to respond as soon as I can.
      </div>
    </div>

    <div class="newsletter bg-gray-300">
      <div class="container-inner mx-auto py-16 pb-8 text-center text-xl">
        <h2 class="text-2xl font-bold mb-8">Join my newsletter</h2>
        <div class="w-4/5 mx-auto mb-8">
            <p class="mb-8 text-xl">Keep up to date with any new blog posts I'm working on and recieve exclusive offers and discounts when they launch</p>
            <form action="#">
              <div class="flex flex-col sm:flex-row">
                <input type="email" name="email" placeholder="Your email address" class="flex-1 bg-white rounded rounded-r-none px-4 py-4 leading-normal border border-r-0 shadow outline-none focus:border-green z-10" required>
                <button class="flex-2 w-40 uppercase text-white rounded rounded-l-none text-lg py-3 px-8 tracking-wide shadow focus:outline-none bg-light-green hover:bg-green z-10 w-full sm:w-auto mt-4 sm:mt-0">Subscribe</button>
              </div>
            </form>
      </div>
      </div>
      <div class="container inner mx-auto pb-4 overflow-x-hidden">
        
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
</style>
