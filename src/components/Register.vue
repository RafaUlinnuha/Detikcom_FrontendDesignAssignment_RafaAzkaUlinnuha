<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
    <section class="bg-[#F4FBFF]">
        <section class="bg-[url('/Background-Header-Title.png')] md:bg-[url('/Background-Header-Title.png')] bg-center bg-cover">
            <div class="px-10 py-48 mx-auto md:text-center text-white">
                <h1 class="text-5xl font-bold">Registrasi</h1>
            </div>        
        </section>      
        <div class="md:max-w-screen-sm lg:max-w-screen-md -mt-32 mx-6 md:mx-auto z-50 pb-24">
            <form class="bg-white p-8 rounded-2xl space-y-5">
                <div class="relative">
                    <input type="text" class="shadow-sm bg-[#F8F8F8] border border-[#F8F8F8] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-4 text-sm" required>
                    <div class="placeholder absolute top-4 left-4 m-auto text-xs">
                        Nama Perusahaan<span class="text-red-500">*</span>
                    </div>
                </div>

                <div class="relative">
                    <input type="text" class="shadow-sm bg-[#F8F8F8] border border-[#F8F8F8] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-4 text-sm" required>
                    <div class="placeholder absolute top-4 left-4 m-auto text-xs">
                        Email<span class="text-red-500">*</span>
                    </div>
                </div>

                <div class="relative">
                    <input type="text" class="shadow-sm bg-[#F8F8F8] border border-[#F8F8F8] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-4 text-sm" required>
                    <div class="placeholder absolute top-4 left-4 m-auto text-xs">
                        Nomor Telepon<span class="text-red-500">*</span>
                    </div>
                    <p id="helper-text-explanation" class="mt-1.5 text-xs text-[#828282]">Isi hanya angka</p>
                </div>               
            
                <textarea id="message" rows="4" class="block py-3 px-4 w-full text-sm rounded-lg bg-[#F8F8F8] border border-[#F8F8F8] focus:ring-blue-500 focus:border-blue-500 placeholder:text-black placeholder:text-xs" placeholder="Tentang Perusahaan (Max. 200 character)"></textarea>

                <div class="grid md:grid-cols-3">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 bg-[#F8F8F8] border border-[#F8F8F8] rounded-lg cursor-pointer">
                        <div class="flex flex-col items-center space-y-20 mt-20">
                            <Icon icon="material-symbols:add-circle" class="text-[#1B85E8] text-5xl" />
                            <p class="text-xs">Upload file logo<span class="text-red-500">*</span></p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                    <div class="md:col-span-2 text-left ml-5 md:ml-10 mt-4 md:my-auto">
                        <ol class="text-xs text-[#1B1E28] list-decimal leading-relaxed">
                            <li>
                                Format file: .png, .jpg, .jpeg
                            </li>
                            <li>
                                Maksimal ukuran file 200KB
                            </li>
                            <li>
                                Hindari penggunaan logo berwarna putih
                            </li>
                            <li>
                                Minimal lebar 300px
                            </li>
                        </ol>
                    </div>
                </div> 

                <div>
                    <input type="file" id="file-input" name="file-input" class="shadow-sm bg-[#F8F8F8] border border-[#F8F8F8] rounded-lg w-full text-xs pl-3 pt-3">
                    <p id="helper-text-explanation" class="mt-1.5 text-xs text-[#828282]">Format file .pdf , maksimal size 20mb</p>
                </div>

                <div class="relative">
                    <input type="text" class="shadow-sm bg-[#F8F8F8] border border-[#F8F8F8] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-4 text-sm" required>
                    <div class="placeholder absolute top-4 left-4 m-auto text-xs">
                        Link website<span class="text-red-500">*</span>
                    </div>
                    <p id="helper-text-explanation" class="mt-1.5 text-xs text-[#828282]">Website, Sosial Media, dll. Sertakan protokol URL (https:// atau http://).</p>
                </div>    

                <div class="flex items-center mb-6">
                    <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required>
                    </div>
                    <label for="terms" class="ml-2 text-xs text-[#071424]">Dengan menekan tombol "Daftar", Saya menyetujui syarat dan ketentuan yang berlaku</label>
                </div>
                <div class="flex justify-center mb-24">
                    <button type="submit" class="text-white bg-[#007CBD] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[5px] text-sm font-semibold w-full md:w-1/3 py-4 text-center">Register</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style>
    input:valid + .placeholder{
        display: none;
    }
    input[type="file"]::-webkit-file-upload-button{
        float: right;
        margin-right: 0;
        margin-top: -10px;
        padding: 15px 48px;
        text-align: center;
        border-radius: 8px;
        background-color: #007CBD;
    }
    #file-input {
        color: transparent;
    }
    input[type='file']::after {
        content: 'Profil Perusahaan atau Deck (opsional)';
        color: black;
        margin-left: -82px;
    }
</style>

