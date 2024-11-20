package org.smc.push.domain

class FcmMessage(
        private val validateOnly: Boolean,
        private val message: Message
) {
    fun getValidateOnly(): Boolean {
        return validateOnly
    }

    fun getMessage(): Message {
        return message
    }
}