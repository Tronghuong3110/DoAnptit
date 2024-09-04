package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Table(name = "message")
@Entity
public class Message {
    @Id
    private Long id;
    private LocalDateTime modifiedAt;
    private LocalDateTime timeSend;
    private String status;
    private String content;
    private String typeMessage;
    private Boolean isSeen;

    @ManyToOne
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;
}
