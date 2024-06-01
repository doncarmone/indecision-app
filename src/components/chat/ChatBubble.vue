<template>
    <div v-if="itsMine" class="flex justify-end">
        <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
            <span class="capitalize">{{ message }}</span>
        </div>
    </div>

    <!-- Example Received Message -->
    <div v-else class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
            <span class="capitalize">{{ message }}</span>
            <img v-if="image" :src="image" class="w-52 h52 object-cover rounded-md" alt="yesNoImage">
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    message: string;
    itsMine: boolean
    image?: string;
}
defineProps<Props>();
</script>