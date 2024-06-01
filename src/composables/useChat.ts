import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-messages.interface";
import { ref } from "vue";

export const useChat = () => {

    const messages = ref<ChatMessage[]>([]);

    const getHerResponse = async () => {
        const resp = await fetch('https://yesno.wtf/api')
        const data = (await resp.json()) as YEsNoResponse;

        return data;
    }

    const onNewMessage = async (text: string) => {
        if (text.length === 0) return;

        messages.value.push({
            id: new Date().getTime(),
            message: text,
            itsMine: true
        });
        if (!text.endsWith('?')) return;

        await sleep(2);
        const { answer, image } = await getHerResponse();

        messages.value.push({
            id: new Date().getTime(),
            message: answer,
            itsMine: false,
            image: image
        });

    };

    return {
        messages,
        onNewMessage
    }
}