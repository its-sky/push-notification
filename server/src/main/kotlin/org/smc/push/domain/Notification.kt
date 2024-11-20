package org.smc.push.domain

class Notification(
        private val title: String,
        private val body: String,
        private val image: String
) {
    fun getTitle(): String {
        return title
    }

    fun getBody(): String {
        return body
    }

    fun getImage(): String {
        return image
    }
}