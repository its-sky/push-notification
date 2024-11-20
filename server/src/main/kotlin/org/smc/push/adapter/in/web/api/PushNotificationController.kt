package org.smc.push.adapter.`in`.web.api

import org.smc.push.adapter.`in`.web.dto.PushNotificationRequest
import org.smc.push.application.port.`in`.PushNotificationUseCase
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/push")
class PushNotificationController(
        private val notificationUseCase: PushNotificationUseCase
) {
    @PostMapping
    fun sendPushNotification(@RequestBody request: PushNotificationRequest) : ResponseEntity<Void> {
        notificationUseCase.sendPushNotification(request)
        return ResponseEntity.ok().build()
    }
}