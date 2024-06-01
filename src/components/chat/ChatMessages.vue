<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <!-- Example Message -->
            <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-messages.interface'
import { ref, watch } from 'vue';
interface Props {
    messages: ChatMessage[];
}
const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(messages, () => {
    setTimeout(() => {
        chatRef.value?.scrollTo({ top: chatRef.value.scrollHeight, behavior: 'smooth' });
    }, 100);
}); 
</script>