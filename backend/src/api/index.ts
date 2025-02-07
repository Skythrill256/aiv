import { db } from "ponder:api";
import schema from "ponder:schema";
import { Hono } from "hono";
import { client, graphql } from "ponder";

const app = new Hono();

class MessageQueue {
    private controllers: Set<ReadableStreamDefaultController> = new Set();

    broadcast(message: string) {
        this.controllers.forEach(controller => {
            controller.enqueue(`data: ${message}\n\n`);
        });
    }

    addController(controller: ReadableStreamDefaultController) {
        this.controllers.add(controller);
        return () => this.controllers.delete(controller);
    }
}

const messageQueue = new MessageQueue();

export function sendMessage(message: string) {
    messageQueue.broadcast(message);
}

app.get('/stream', async (c) => {
    const stream = new ReadableStream({
        start(controller) {
            const cleanup = messageQueue.addController(controller);
            controller.enqueue('data: Connected to stream\n\n');

            c.req.raw.signal.addEventListener('abort', () => {
                cleanup();
                controller.close();
            });
        }
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        }
    });
});

app.use("/sql/*", client({ db, schema }));

app.use("/", graphql({ db, schema }));
app.use("/graphql", graphql({ db, schema }));

export default app;
