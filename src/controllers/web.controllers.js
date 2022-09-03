const sendReply = async (req, reply) => {
    reply.send({
        message: 'hello',
        code: 42
    })
}

export { sendReply }