package org.smc.push.application.service

import com.fasterxml.jackson.databind.ObjectMapper
import com.google.auth.oauth2.GoogleCredentials
import org.smc.push.adapter.`in`.web.dto.PushNotificationRequest
import org.smc.push.application.port.`in`.PushNotificationUseCase
import org.smc.push.domain.FcmMessage
import org.smc.push.domain.Message
import org.smc.push.domain.Notification
import org.springframework.core.io.ClassPathResource
import org.springframework.stereotype.Service
import org.springframework.web.client.RestClient

const val FCM_URL: String = "https://fcm.googleapis.com"
const val API_URI: String = "/v1/projects/push-test-f29b7/messages:send"
const val FIREBASE_CONFIG_PATH = "firebase_service_key.json"

@Service
class PushNotificationService(
        private val objectMapper: ObjectMapper,
        ): PushNotificationUseCase {
    override fun sendPushNotification(request: PushNotificationRequest) {
        val response = RestClient.builder().baseUrl(FCM_URL)
                .defaultHeader("Authorization", "Bearer ${getAccessToken()}")
                .defaultHeader("Content-Type", "application/json")
                .build()
                .post()
                .uri(API_URI)
                .body(makeMessage(request.deviceToken, request.title, request.body))
                .retrieve()
                .body(String::class.java)
    }

    private fun makeMessage(targetToken: String, title: String, body: String): String {
        val fcmMessage = FcmMessage(validateOnly = false,
                message = Message(
                        token = targetToken,
                        notification = Notification(title, body, "default")
                )
        )
        return objectMapper.writeValueAsString(fcmMessage)
    }

    private fun getAccessToken(): String {
        val googleCredentials = GoogleCredentials.fromStream(ClassPathResource(FIREBASE_CONFIG_PATH).inputStream)
                .createScoped(listOf("https://www.googleapis.com/auth/cloud-platform"))
        googleCredentials.refreshIfExpired()

        val accessToken = googleCredentials.accessToken
        return accessToken.tokenValue
    }
}