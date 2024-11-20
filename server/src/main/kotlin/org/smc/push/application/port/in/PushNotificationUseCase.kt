package org.smc.push.application.port.`in`

import org.smc.push.adapter.`in`.web.dto.PushNotificationRequest

interface PushNotificationUseCase {
    fun sendPushNotification(request: PushNotificationRequest)
}