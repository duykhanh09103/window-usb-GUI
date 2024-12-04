<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
const usb_callMsg = ref("")
async function usb_call() {
  usb_callMsg.value = "";
  let msg = await invoke("usb_call");
  let msgArray = msg.trim().slice(204).split('\n')
  let i = 0
  while (i < msgArray.length) {
    usb_callMsg.value += `<tr class="font-medium text-gray-900 p-4 whitespace-nowrap dark:text-white">`
    usb_callMsg.value += `<td class="p-4">` + msgArray[i].slice(0, 7).trim() + `</td>`
    usb_callMsg.value += `<td class="p-4">` + msgArray[i].slice(7, 7 + 5).trim() + `</td>`
    usb_callMsg.value += `<td class="p-4">` + msgArray[i].slice(7 + 5, 74).trim() + `</td>`
    usb_callMsg.value += `<td class="p-4">` + msgArray[i].slice(74).trim() + `</td>`
    usb_callMsg.value += "</tr>"
    i++
  }


}

if (document.getElementById("default-table") && typeof simpleDatatables.DataTable !== 'undefined') {
  const dataTable = new simpleDatatables.DataTable("#default-table", {
    searchable: false,
    perPageSelect: true
  });
}

</script>

<template>
  <div class="justify-center">


    <div class="bg-stone-600 justify-center items-center flex">
      <form class="" @submit.prevent="usb_call">
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Start
          </span>
        </button>
      </form>
    </div>
    <div class="justify-center items-center flex">
      <table id="default-table">
        <thead>
          <tr>
            <th>
              <span class=" p-4 flex items-center">
                Friendly Name
                <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th>
            <th>
              <span class="flex items-center">
                Status
                <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th>
            <th>
              <span class=" p-4 flex items-center">
                Class
                <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th>
            <th>
              <span class="flex p-4 items-center">
                Instance id
                <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody v-html="usb_callMsg">
          
        </tbody>
      </table>
    </div>
  </div>


</template>
