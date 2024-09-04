package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Table(name ="chat_room")
@Entity
public class ChatRoom {
    @Id
    private Long id;
    private String name;
    private LocalDateTime createAt;

    @ManyToMany
    @JoinTable(name = "user_chat",
    joinColumns = @JoinColumn(name = "chat_room_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id"))
    List<User> users;
}
