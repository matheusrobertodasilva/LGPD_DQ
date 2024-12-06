<script>
    export default{
        data(){
            return{
                openMenu:false
            }
        }
    }
</script>

<template>
    <header class="bg-[rgb(0,71,143,1)] text-white ">
        <nav class="flex justify-between items-center flex-wrap relative py-5 px-[10px] z-10 lg:max-w-[1136px] lg:mx-auto">
            <a href="" class="w-[50%] md:w-[20%] lg:w-[10%] lg:cursor-pointer "><img src="/src/assets/2-removebg-preview.png" alt="logo" class=""></a>
            <button class="lg:hidden" @click="[openMenu = !openMenu]" ><img :src="[ openMenu ? '/src/assets/close.png' :'/src/assets/menu.png']" alt="menu"></button>
            <ul class="p-3 w-[100%] space-y-5 duration-500 z-0 lg:static lg:flex lg:w-auto lg:opacity-100 lg:pointer-events-auto lg:space-y-0 lg:space-x-8" :class="[openMenu ? 'block' : 'hidden']">
                <li class="p-3 border rounded-lg lg:p-0 lg:border-none"><a class="lg:hover:text-blue-400 lg:p-0 p-3 w-[100%]" href="/">Inicio</a></li>
                <li class="p-3 border rounded-lg lg:p-0 lg:border-none"><a class="lg:hover:text-blue-400 lg:p-0 p-3 w-[100%]" href="/encarregadoDeDados">Encarregado de Dados</a></li>
                <li class="p-3 border rounded-lg lg:p-0 lg:border-none"><a class="lg:hover:text-blue-400 lg:p-0 p-3 w-[100%]" href="/politicaDePrivacidade">Política de Privacidade</a></li>
                <li class="p-3 border rounded-lg lg:p-0 lg:border-none"><a class="lg:hover:text-blue-400 lg:p-0 p-3 w-[100%]" href="/contato">Contato</a></li>
                <li class="p-3 border rounded-lg lg:p-0 lg:border-none"><a class="lg:hover:text-blue-400 lg:p-0 p-3 w-[100%]" href="/informacoes">Informações</a></li>
            </ul>
        </nav>
    </header>
</template>