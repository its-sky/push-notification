package org.smc.push.adapter.`in`.web.dto

data class PushNotificationRequest(
        val deviceToken: String,
        val title: String,
        val body: String
)
