package org.smc.push.domain

class Message(
        private val notification: Notification,
        private val token: String
) {
    fun getNotification(): Notification {
        return notification
    }

    fun getToken(): String {
        return token
    }
}