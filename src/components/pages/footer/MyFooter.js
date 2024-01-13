function MyFooter() {

    const copyRightYear = new Date().getFullYear();

    return ( 
        <footer class="w-full bg-white rounded-lg dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between ">
                    <a href="#" class="text-colorBlue flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse no-underline">
                         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SucceedInPixels</span>
                    </a> 
                    
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="text-colorBlue hover:underline me-4 md:me-6 no-underline">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="#" class="text-colorBlue hover:underline me-4 md:me-6 no-underline">Términos</a>
                        </li>
                        <li>
                            <a href="#" class="text-colorBlue hover:underline me-4 md:me-6 no-underline">Afiliados</a>
                        </li>
                        <li>
                            <a href="#" class="text-colorBlue hover:underline no-underline">Contáctanos</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-colorGray sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {copyRightYear} <a href="#" class="text-colorBlue hover:underline no-underline">SucceedInPixels™</a>. Todos los derechos reservados.</span>
            </div>
        </footer>

    )
}

export default MyFooter;