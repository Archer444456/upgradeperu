import { useEffect } from 'react';

export default function N8nChatButton() {
  useEffect(() => {
    let isMounted = true;

    const initChat = async () => {
      try {
        // Dynamically import the createChat function from the CDN
        const { createChat } = await import(
          /* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js'
        );

        if (isMounted) {
          // The target element should be in the DOM when this runs
          createChat({
            webhookUrl: 'https://webhook.n8.protocolo2r.store/webhook/a8619b37-f456-4871-968f-31de5c36aab1/chat',
            webhookConfig: {
              method: 'POST',
              headers: {}
            },
            target: '#n8n-chat',
            mode: 'window',
            chatInputKey: 'chatInput',
            chatSessionKey: 'sessionId',
            metadata: {},
            showWelcomeScreen: false,
            defaultLanguage: 'es',
            initialMessages: [
              'Hola ! 👋',
              'Como puedo ayudarte hoy?'
            ],
            i18n: {
              es: {
                title: 'Que tal! 👋',
                subtitle: "Hablemos. Estamos disponibles 24/7.",
                footer: '',
                getStarted: 'New Conversation',
                inputPlaceholder: 'Pregunta lo que quieras',
              },
            },
          });
        }
      } catch (error) {
        console.error("Failed to load n8n chat widget:", error);
      }
    };

    initChat();

    return () => {
      isMounted = false;
      // Cleanup: find the chat container and clear it.
      const chatElement = document.getElementById('n8n-chat');
      if (chatElement) {
        chatElement.innerHTML = '';
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div id="n8n-chat"></div>;
}
